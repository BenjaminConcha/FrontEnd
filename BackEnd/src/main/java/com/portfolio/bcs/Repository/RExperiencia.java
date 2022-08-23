
package com.portfolio.bcs.Repository;

import com.portfolio.bcs.Entity.Experiencia;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RExperiencia  extends JpaRepository<Experiencia, Integer>{
    
    public Optional<Experiencia> findByNombreE(String NombreE);
    public boolean existsByNombreE(String NombreE);
}
