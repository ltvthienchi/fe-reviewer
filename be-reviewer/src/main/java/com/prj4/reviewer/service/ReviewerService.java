package com.prj4.reviewer.service;

import com.prj4.reviewer.core.Constants;
import com.prj4.reviewer.entity.*;
import com.prj4.reviewer.reporsitory.*;
import com.prj4.reviewer.request.FeedbackCompanyRequest;
import com.prj4.reviewer.request.ReviewCompRequest;
import com.prj4.reviewer.response.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ReviewerService {

    @Autowired
    FeedbackCompanyRepository feedbackCompanyRepository;
    @Autowired
    ReviewerRepository reviewerRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    GenerateId generateId;

    @Autowired
    ImageService imageService;

    @Autowired
    ImageRepository imageRepository;

    @Autowired
    FileStorageService fileStorageService;

    @Autowired
    CompanyRepository companyRepository;

    @Autowired
    AdminRepository adminRepository;

    @Autowired
    CreatePostResponseService createPostResponseService;

    @Autowired
    PostService postService;

    @Autowired
    FollowCompanyService followCompanyService;

    @Autowired
    ReviewCompanyRepository reviewCompanyRepository;

    @Autowired
    CompanyService companyService;

    public FeedbackCompanyResponse feedbackCompany(FeedbackCompanyRequest feedbackCompanyRequest) {
        return null;
    }
    public String getFullName(String idAccount) {
        return reviewerRepository.findByIdAccount(idAccount).getFullName();
    }
    public void saveReviewer(Reviewer reviewer) {
        reviewerRepository.save(reviewer);
    }

    public boolean isExistingReviewer(String emailReviewer) {
        Reviewer reviewer = reviewerRepository.findByEmail(emailReviewer);
        if (reviewer == null) {
            return false;
        } else {
            return true;
        }
    }

    public ReviewerInfoResponse getReviewerInfo(String email, String role) {
        ReviewerInfoResponse reviewerResponse = null;
        String fullName = null;
        String imgAvatar = null;
        if (role.equals("ROLE_NORMAL")) {
            Reviewer reviewer = reviewerRepository.findByEmail(email);
            fullName = reviewer.getFullName();
            imgAvatar = imageService.getImagePathById(reviewer.getImgAvatar());
        } else if (role.equals("ROLE_COMPANY")) {
            Company company = companyRepository.findByEmailCompany(email);
            fullName = company.getNameCompany();
            imgAvatar = imageService.getImagePathById(company.getImgAvatarCompany());
        } else {
            Admin admin = adminRepository.findByEmailAdmin(email);
            fullName = admin.getFullNameAdmin();
            imgAvatar = "http://localhost/img/reviewer/avar-pay.png";
        }

        return new ReviewerInfoResponse(imgAvatar, fullName);
    }

    public ReviewerResponse getReviewerInfoById(String idReviewer) {
        Reviewer reviewer = reviewerRepository.findByIdReviewer(idReviewer);
        if (reviewer != null) {
            String imgAvatar = imageService.getImagePathById(reviewer.getImgAvatar());
            String imgPanel = imageService.getImagePathById(reviewer.getImgPanel());
            return new ReviewerResponse(reviewer.getIdReviewer(), reviewer.getFullName(),
                    reviewer.getFirstName(), reviewer.getLastName(),reviewer.getEmail(),reviewer.getDateOfBirth(),
                    imgAvatar, imgPanel, reviewer.getGender(), reviewer.getTypeReviewer());
        }
        return null;
//        return reviewerResponse;
    }

    public String getReviewerIdByEmail(String email){
        //reviewerRepository.findByEmail(email);
        return reviewerRepository.findByEmail(email).getIdReviewer();
    }
    // Hàm bao gồm nhưng data trong request
    public void updateInfo(String idReviewer, String firstName, String lastName, Date dobReviewer, int gender,
                           MultipartFile avaReviewer, MultipartFile panelReviewer) {
        Reviewer reviewer = reviewerRepository.findByIdReviewer(idReviewer);
        reviewer.setDateOfBirth(dobReviewer);
        reviewer.setGender(gender);
        reviewer.setFirstName(firstName);
        reviewer.setLastName(lastName);
        reviewer.setFullName(firstName + " " + lastName);
        if (avaReviewer != null) {
            Images images = imageRepository.findByIdImage(reviewer.getImgAvatar());
            String fileName =  fileStorageService.storeFile(avaReviewer, images.getIdImage(), Constants.IMAGE_AVA);
            String fileDownloadUri = "http://localhost/img/reviewer/" + fileName;
            images.setImgPath(fileDownloadUri);
        }
        if (panelReviewer != null) {
            Images images = imageRepository.findByIdImage(reviewer.getImgPanel());
            String fileName =  fileStorageService.storeFile(panelReviewer, images.getIdImage(), Constants.IMAGE_PANEL);
            String fileDownloadUri = "http://localhost/img/reviewer/" + fileName;
            images.setImgPath(fileDownloadUri);
        }
        reviewerRepository.save(reviewer);
    }

    public Reviewer getReviewerByIdReviewer(String idReviewer) {
        return reviewerRepository.findByIdReviewer(idReviewer);
    }

    public String getImageAvatarByIdReviewer(String idReviewer) {
        String idImage = reviewerRepository.findByIdReviewer(idReviewer).getImgAvatar();
        return imageService.getImagePathById(idImage);
    }
    public List<Reviewer> getAll(){
        return (List<Reviewer>)reviewerRepository.findAll();
    }

    public List<PostResponse> getAllPostIsFollowed(String idReviewer) {
        List<PostResponse> lstResult = new ArrayList<>();
        List<String> lstIdCompany = followCompanyService.getListCompanyIsFollowed(idReviewer);
        if (lstIdCompany.size() > 0) {
            for (String idCompany : lstIdCompany) {
                List<Post> lstPost = postService.getAllPostByComId(idCompany);
                List<PostResponse> lstPostRespose = createPostResponseService.createListPostReponse(lstPost);
                lstResult.addAll(lstPostRespose);
            }
        }
        return lstResult;
    }

    public void createRatingComp(ReviewCompRequest reviewCompRequest) {
        ReviewCompany reviewCompany = reviewCompanyRepository.findByIdReviewer(reviewCompRequest.getIdReviewer());
        Company company = companyService.getCompanyById(reviewCompRequest.getIdCompany());
        int numbRating = company.getNumbRating();
        if (reviewCompany != null) {
            reviewCompany.setRatingComp(reviewCompRequest.getRatingComp());
            reviewCompany.setCommentContent(reviewCompRequest.getContentComment());
            reviewCompanyRepository.save(reviewCompany);
        } else {
            String reviewCompId = generateId.generateId("REVIEWCOMP_", new Date());
            reviewCompany = new ReviewCompany(reviewCompId, reviewCompRequest.getIdReviewer(), reviewCompRequest.getIdCompany(),
                    reviewCompRequest.getRatingComp(), reviewCompRequest.getContentComment(), new Date());
            reviewCompanyRepository.save(reviewCompany);
            company.setNumbRating(numbRating + 1);
        }
        float avgRating = reviewCompanyRepository.getAvgIdCompany(reviewCompRequest.getIdCompany());
        company.setAvgRatingComp(avgRating);
        companyService.saveCompany(company);

    }

    public List<ReviewCompanyResponse> getListReviewComp(String idCompany) {
        List<ReviewCompany> lstReviewComp = reviewCompanyRepository.findByIdCompany(idCompany);
        List<ReviewCompanyResponse> lstResult = new ArrayList<>();
        for (ReviewCompany re : lstReviewComp) {
            String idReviewer = re.getIdReviewer();
            Reviewer reviewer = reviewerRepository.findByIdReviewer(idReviewer);
            String imgAva = imageService.getImagePathById(reviewer.getImgAvatar());
            ReviewCompanyResponse reviewCompanyResponse = new ReviewCompanyResponse(reviewer.getFullName(), idReviewer,
                    imgAva, re.getRatingComp(), re.getCommentContent(), re.getDtCreated());
            lstResult.add(reviewCompanyResponse);
        }
        return lstResult;

    }

    public ReviewCompany getReviewCompByIdReviewer(String idReviewer) {
        ReviewCompany reviewComp = reviewCompanyRepository.findByIdReviewer(idReviewer);
        return reviewComp;

    }

}
