
package com.portfolio.bcs.Service;

import com.portfolio.bcs.Entity.Experiencia;
import com.portfolio.bcs.Repository.RExperiencia;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SExperiencia {
    @Autowired
    RExperiencia rExperiencia;
    
    public List<Experiencia> list(){
        return rExperiencia.findAll();
    }
    
    public Optional<Experiencia> getOne(int id){
        return rExperiencia.findById(id);
    }
    
    public Optional<Experiencia> getByNombreE(String NombreE){
        return rExperiencia.findByNombreE(NombreE);
    }
    
    public void save (Experiencia exp){
        rExperiencia.save(exp);
    }
    
    public void delete(int id){
        rExperiencia.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rExperiencia.existsById(id);
    }
    
    public boolean existsByNombreE(String NombreE){
        return rExperiencia.existsByNombreE(NombreE);
    }
    
}
