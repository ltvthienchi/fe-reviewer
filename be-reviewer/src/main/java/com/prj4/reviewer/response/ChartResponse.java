package com.prj4.reviewer.response;

import java.io.Serializable;

public class ChartResponse implements Serializable {
    private int valueChart;
    private String nameChart;

    public ChartResponse(int valueChart, String nameChart) {
        this.valueChart = valueChart;
        this.nameChart = nameChart;
    }

    public int getValueChart() {
        return valueChart;
    }

    public void setValueChart(int valueChart) {
        this.valueChart = valueChart;
    }

    public String getNameChart() {
        return nameChart;
    }

    public void setNameChart(String nameChart) {
        this.nameChart = nameChart;
    }
}
