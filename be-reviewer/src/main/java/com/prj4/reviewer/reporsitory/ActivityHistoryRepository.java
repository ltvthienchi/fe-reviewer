package com.prj4.reviewer.reporsitory;

import com.prj4.reviewer.entity.ActivityHistory;
import com.prj4.reviewer.response.ChartResponse;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ActivityHistoryRepository extends CrudRepository<ActivityHistory, String> {
    @Query("select c from ActivityHistory c where c.idReviewer = :idReviewer order by c.dtCreated DESC" )
    List<ActivityHistory> getActivityHistory(String idReviewer);


    @Query("select count(c.typeHistory), c.typeHistory from ActivityHistory c group by c.typeHistory" )
    List<Object[]> getChartResponse();

}
