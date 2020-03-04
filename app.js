documento . addEventListener ( "DOMContentLoaded" ,  e => {
    const  forma  =  documento . querySelector ( "#frmConversores" ) ;
    formar . addEventListener ( "submit" ,  event => {
        evento . preventDefault ( ) ;
  
        let  de  =  documento . querySelector ( "#cboDe" ) . valor ,
            a  =  documento . querySelector ( "#cboA" ) . valor ,
            cantidad  =  documento . querySelector ( "#txtCantidadConversor" ) . valor ,
            opcion  =  documento . getElementById ( 'cboConvertir' ) ;
  
        dejar
        monedas  =  {
            "dolar" : 1 ,
            "Colones" : 8.75 ,
            "Yenes" : 111.27 ,
            "Rupia" : 69.75 ,
            "Lempira" : 24.36 } ,
            longitudes  =  {
              "mm" : 1000 ,
              "cm" : 100 ,
              "mt" : 1 ,
              "km" : 0.001 ,
              "milla" : 0.000621371 ,
              "yarda" : 1.09361 ,
                "pastel" : 3.28084 ,
                "pulgada" : 39.3701
            } 
               ;
  
        let 
         $ res  =  documento . querySelector ( "#lblRespuesta" ) ;
        if ( opcion . value  ==  "moneda" ) {
          $ res . innerHTML  =  `Respuesta: $ { ( monedas [ a ] / monedas [ de ] * cantidad ) . toFixed ( 4 )  } ` ;
        }  else  if ( opcion . value  ==  "longitud" ) {
          $ res . innerHTML  =  `Respuesta: $ { ( longitudes [ a ] / longitudes [ de ] * cantidad ) . toFixed ( 4 )  } ` ;
        }  else  if ( opcion . value  ==  "almacenamiento" ) 
        } ;
    } ) ;
  
  
  // llenar los cuadro de selección 
  función  elegir_opcion ( )  {
    let  opcion  =  documento . getElementById ( 'cboConvertir' ) ,
    de1  =  documento . getElementById ( 'cboDe' ) ,
    a1  =  documento . getElementById ( 'cboA' ) ;
    // limpia antes de actualizar
    de1 . valor = "" ;
    a1 . valor = "" ;
    de1 . innerHTML = "" ;
    a1 . innerHTML = "" ;
  
    if ( opcion . value  ==  "moneda" ) {
      var   array  =  [ "dolar! DOLAR" , "colones! colones" , "yenes! yenes" , "lempira! LEMPIRA" , "rupia! rupia" ] ; 
    }  else  if ( opcion . value  ==  "longitud" ) {
      var  array  =  [ "mm! MILIMETRO" , "cm! CENTIMETRO" , "mt! METRO" , "km! KILOMETRO" , "milla! MILLA" , "yarda! YARDA" , "pie! PIE" , "pulgada! PULGADA " ] ;
    }  else  if ( opcion . value  ==  "almacenamiento" ) {
     
  
    for ( var  i = 0 ; i < array . length ; i ++ ) { 
       reparación  var =  matriz [ i ] . dividir ( "!" ) ;
      var  newop  =  documento . createElement ( "opción" ) ;
      newop . valor  =  reparar [ 0 ]
      newop . innerHTML  =  reparar [ 1 ] ;
      de1 . opciones . agregar ( newop ) ;
    } ;
    for ( var  i = 0 ; i < array . length ; i ++ ) { 
       reparación  var =  matriz [ i ] . dividir ( "!" ) ;
      var  newop  =  documento . createElement ( "opción" ) ;
      newop . valor  =  reparar [ 0 ]
      newop . innerHTML  =  reparar [ 1 ] ;
      a1 . opciones . agregar ( newop ) ;
    } ;
   }