package com.prj4.reviewer.core;

public class Constants {

    public static final long ACCESS_TOKEN_VALIDITY_SECONDS = 5*60*60;
    public static final String SIGNING_KEY = "devglan123r";
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final boolean IS_TEST_MODE = false;

    // Replace with your email here:
    public static final String MY_EMAIL = "bestchoicesmartcmp@gmail.com";

    // Replace password!!
    public static final String MY_PASSWORD = "P@ssword123++";

    // Type IMAGE
    public static final String POST_IMG = "POST_IMG";
    public static final String IMAGE_AVA = "IMAGE_AVA";
    public static final String IMAGE_PANEL = "IMAGE_PANEL";
    public static final int COMPANY_IMAGE_TYPE = 1;
    public static final int REVIEWER_IMAGE_TYPE = 2;

    // Type History
    public static final String RATING_ACTIVITY = "RATE";
    public static final String COMMENT_ACTIVITY = "COMMENT";
    public static final String REVIEWCOMP_ACTIVITY = "REVIEW";
    public static final String FOLLOW_ACTIVITY = "FOLLOW";
    public static final String UN_FOLLOW_ACTIVITY = "UNFOLLOW";
    public static final String UPDATE_IMGAVA_ACTIVITY = "AVA";
    public static final String UPDATE_IMGPANEL_ACTIVITY = "PANEL";

}

