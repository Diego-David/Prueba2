function change(canton, parroquia){
    canton = document.getElementById(canton);
    parroquia = document.getElementById(parroquia);
    parroquia.value ="";
    parroquia.innerHTML = "";
    if(canton.value == "La Mana"){
    var optionArray = ["|","El Carmen|El Carmen",
                              "El Triunfo|El Triunfo",
                              "La Maná|La Maná",
                              "Guasaganda|Guasaganda",
                              "Pucayacu|Pucayacu"];

    } else if(canton.value == "Latacunga"){
    var optionArray = ["|","Eloy Alfaro|Eloy Alfaro",
                              "Ignacio Flores|Ignacio Flores",
                              "Juan Montalvo|Juan Montalvo",
                              "La Matriz|La Matriz",
                              "San Buenaventura|San Buenaventura",
                              "Aláquez|Aláquez",
                              "Belisario Quevedo|Belisario Quevedo",
                              "Guaytacama|Guaytacama",
                              "Joseguango Bajo|Joseguango Bajo",
                              "Mulaló|Mulaló",
                              "11 de Noviembre|11 de Noviembre",
                              "Poaló|Poaló",
                              "San Juan de Pastocalle|San Juan de Pastocalle",
                              "Tanicuchi|Tanicuchi",
                              "Toacaso|Toacaso"];        
                              
                              

    } else if(canton.value == "Pangua"){
    var optionArray = ["|","El Corazón|El Corazón",
                              "Moraspungo|Moraspungo",
                              "Pinllopata|Pinllopata",
                              "Ramón Campaña|Ramón Campaña"];        
                              
    } else if(canton.value == "Pujilí"){
    var optionArray = ["|","Pujilí|Pujilí",
                              "Angamarca|Angamarca",
                              "Guangaje|Guangaje",
                              "La Victoria. Pilaló|La Victoria. Pilaló",
                              "Tingo|Tingo",
                              "Zumbahua|Zumbahua"];     
                                                       
    } else if(canton.value == "Salcedo"){ 
    var optionArray = ["|","San Miguel|San Miguel",
                              "Antonio José Holguín|Antonio José Holguín",
                              "Cusubamba|Cusubamba",
                              "Mulalillo|Mulalillo",
                              "Mulliquindil|Mulliquindil",
                              "Panzaleo|Panzaleo"];                   

    } else if(canton.value == "Saquisilí"){
    var optionArray = ["|","Saquisilí|Saquisilí",
                              "Canchagua|Canchagua",
                              "Chantilín|Chantilín",
                              "Cochapamba|Cochapamba"];  

    } else if(canton.value == "Sigchos"){
    var optionArray = ["|","Isinliví|Isinliví",
                              "Las Pampas|Las Pampas",
                              "Palo Quemado|Palo Quemado"];                 
};

  for(option = 0;option < optionArray.length; option++){
    var pair = optionArray[option].split("|");
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    parroquia.options.add(newOption);
  };
}