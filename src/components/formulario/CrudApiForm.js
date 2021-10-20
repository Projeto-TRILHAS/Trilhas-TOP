import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";

const CrudApi = () =>{
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);

    let api = helpHttp();
    let url = "http://localhost:5000/contatos";

    useEffect(()=> {
      api.get(url).then((res)=>{
        //console.log(res);
        if(!res.err){
          setDb(res)
        }else{
          setDb([])
        }
      })
    },[]);

    const createData = (data) => {
      data.id = Date.now();
      //console.log(data);
  
      let options = {
        body: data,
        headers: { "content-type": "application/json" },
      };
  
      api.post(url, options).then((res) => {
        //console.log(res);
        if (!res.err) {
          setDb([...db, res]);
        } 
      });
    };

    return(
        <div>
            <CrudForm 
            createData= {createData} 
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit} 
            />            
        </div>
    );        
}

export default CrudApi