package com.core.util;

import com.core.model.Job;

import java.util.HashMap;
import java.util.List;

public class DashboardAggregate {

    public static HashMap<String, Long> aggegateByProcessTotal(List<Job> jobs) {
        HashMap<String, Long> response = new HashMap<>();
        Integer processTotal = 0;
        Integer awaitingHeadhunter = 0;
        Integer finished = 0;
        for (Job job : jobs) {
            if (job.getStatus().equals("ativo")) {
                response.put("processTotal", response.get("processTotal") == null ? 1 :
                        response.get("processTotal") + 1);
            } else if (job.getStatus().equals("finalizado")) {
                response.put("totalFinished", response.get("totalFinished") == null ? 1 :
                        response.get("totalFinished") + 1);
            } else {
                response.put("awaitingHeadhunter", response.get("awaitingHeadhunter") == null ? 1 :
                        response.get("awaitingHeadhunter") + 1);
            }
        }
        return response;
    }
}
