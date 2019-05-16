package com.prj4.reviewer.core;

import com.prj4.reviewer.response.PostResponse;

import java.util.Comparator;

public class SortByDate implements Comparator<PostResponse> {
    @Override
    public int compare(PostResponse o1, PostResponse o2) {
        if (o1.getDtCreated().after(o2.getDtCreated()))
            return 1;
        return -1;
    }
}
