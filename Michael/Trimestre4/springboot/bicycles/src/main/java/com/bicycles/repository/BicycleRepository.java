package com.bicycles.repository;

import com.bicycles.entity.Bicycle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BicycleRepository extends JpaRepository<Bicycle, Integer> {
}
