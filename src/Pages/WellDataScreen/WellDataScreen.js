import React, {useState} from 'react';
import TextInputGroup from '../../components/TextInputGroup';

const  WellDataScreen = () => {
  const [state, setState] = useState({
    porosity: '',
    permeability: '',
    viscosity:'',
    thickness: '',
    encroachmentAngle:'',
    externalRadius: '',
    aquiferRadius: '',
    dimentionlessRadius: '',
    totalCompressibility: '',
    waterInfluxConstant: '',
    encroachmentConstant: ''
  });


  const onChangeHandler = (e) => setState({ ...state, [e.target.name]:e.target.value});

  const onSubmitHandler = (
   e,
   porosity, 
   permeability, 
   viscosity, 
   thickness, 
   encroachmentAngle, 
   externalRadius,
    aquiferRadius, dimentionlessRadius, totalCompressibility, waterInfluxConstant, encroachmentConstant
  ) => {
    e.preventDefault();
     console.log(porosity, permeability, viscosity, thickness, encroachmentAngle, externalRadius, aquiferRadius, dimentionlessRadius, totalCompressibility, waterInfluxConstant, encroachmentConstant)
  }
 

    const { porosity, permeability, viscosity, thickness, encroachmentAngle, externalRadius, aquiferRadius, dimentionlessRadius, totalCompressibility, waterInfluxConstant, encroachmentConstant} = state;
    return (
        <div>
          <h1>Please Provide The following well Data:</h1>  
          <section>
           <form onSubmit={(e) => onSubmitHandler(e, porosity, permeability, viscosity, thickness, encroachmentAngle, externalRadius, aquiferRadius, dimentionlessRadius, totalCompressibility, waterInfluxConstant, encroachmentConstant)}>
            <TextInputGroup
            label="&phi;"
            name="porosity"
            placeholder="Porosity"
            value={porosity}
            onChange={onChangeHandler}
            />
            <TextInputGroup
            label="&kappa;"
            name="permeability"
            placeholder="Permeabilty"
            value={permeability}
            onChange={onChangeHandler}
            />
            <TextInputGroup
            label="&mu;"
            name="viscosity"
            placeholder="viscosity"
            value={viscosity}
            onChange={onChangeHandler}
            />
            <TextInputGroup
            label="H"
            name="thickness"
            placeholder="Reservoir thickness"
            value={thickness}
            onChange={onChangeHandler}
            />
            <TextInputGroup
            label="&theta;"
            name="encroachmentAngle"
            placeholder="Encroachment angle"
            value={encroachmentAngle}
            onChange={onChangeHandler}
            />
            <TextInputGroup
            label="r"
            name="externalRadius"
            placeholder="external radius"
            subscript="e"
            value={externalRadius}
            onChange={onChangeHandler}
            />
            <TextInputGroup
            label="r"
            name="aquiferRadius"
            placeholder="aquifer radius"
            subscript="a"
            value={aquiferRadius}
            onChange={onChangeHandler}
            />
            <TextInputGroup
            label="r"
            name="dimentionlessRadius"
            placeholder="dimentionless radius"
            subscript="eD"
            value={dimentionlessRadius}
            onChange={onChangeHandler}
            />
            <TextInputGroup
            label="c"
            name="totalCompressibility"
            placeholder="total compressibilty"
            subscript="tw"
            value={totalCompressibility}
            onChange={onChangeHandler}
            />
            <TextInputGroup
            label="C"
            name="waterInfluxConstant"
            placeholder="water influx constant"
            value={waterInfluxConstant}
            onChange={onChangeHandler}
            />
            <TextInputGroup
            label="f"
            name="encroachmentConstant"
            placeholder="encroachment constant"
            value={encroachmentConstant}
            onChange={onChangeHandler}
            />
            <button type="submit">Proceed</button>
           </form>
          </section>
        </div>
    )
}



export default WellDataScreen;