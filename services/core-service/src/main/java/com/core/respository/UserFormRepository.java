package com.core.respository;


import com.core.model.UserForm;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserFormRepository extends JpaRepository<UserForm, Long> {

    List<UserForm> findByFormId(Long formId);

    List<UserForm> findByUserId(Long userId);
}
