package com.core.dto;

public class DashboardStats {

    private Long processTotal;
    private Long awaitingHeadhunter;
    private Long totalFinished;

    public Long getProcessTotal() {
        return processTotal;
    }

    public void setProcessTotal(Long processTotal) {
        this.processTotal = processTotal;
    }

    public Long getAwaitingHeadhunter() {
        return awaitingHeadhunter;
    }

    public void setAwaitingHeadhunter(Long awaitingHeadhunter) {
        this.awaitingHeadhunter = awaitingHeadhunter;
    }

    public Long getTotalFinished() {
        return totalFinished;
    }

    public void setTotalFinished(Long totalFinished) {
        this.totalFinished = totalFinished;
    }
}
