import React from 'react'

const  WellDataScreen = () => {
    return (
        <div>
          <h1>Please Provide The following well Data:</h1>  
          <section>
            <div>
              <label htmlFor="porosity"><span className="symbol"><var>&phi;</var></span></label>
              <input type="text"/>
            </div>
            <div>
              <label htmlFor="permeability"><span className="symbol"><var>&kappa;</var></span></label>
              <input type="text"/>
            </div>
            <div>
              <label htmlFor="viscosity"><span><var>&mu;</var></span></label>
              <input type="text"/>
            </div>
            <div>
              <label htmlFor="thickness"><span><var>&eta;</var></span></label>
              <input type="text"/>
            </div>
            <div>
              <label htmlFor="encroachment-angle"><span><var>&theta;</var></span></label>
              <input type="text"/>
            </div>
            <div>
              <label htmlFor="external-radius"><span><var>r<sub>e</sub></var></span></label>
              <input type="text"/>
            </div>
            <div>
              <label htmlFor="aquifer-radius"><span><var>r<sub>a</sub></var></span></label>
              <input type="text"/>
            </div>
            <div>
              <label htmlFor="dimentionless-radius"><span><var>r<sub>eD</sub></var></span></label>
              <input type="text"/>
            </div>
            <div>
              <label htmlFor="total-compressibility"><span><var>c<sub>tw</sub></var></span></label>
              <input type="text"/>
            </div>
            <hr/>
            <div>
              <label htmlFor="water-influx-constant"><span><var>C</var></span></label>
              <input type="text"/>
            </div>
            <div>
              <label htmlFor="encroachment-constant"><span><var>f</var></span></label>
              <input type="text"/>
            </div>
          </section>
          
          {/* Parameters Reference */}

        </div>
    )
}



export default WellDataScreen;