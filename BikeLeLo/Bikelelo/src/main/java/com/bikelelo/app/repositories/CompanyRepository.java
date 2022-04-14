package com.bikelelo.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bikelelo.app.entities.Company;

public interface CompanyRepository extends JpaRepository<Company, Integer> {

}
