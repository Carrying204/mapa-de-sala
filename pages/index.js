import Link from 'next/link';

const style = `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    .main {
        display: flex;
        justify-content: space-between;
        padding-left: 30px;
        padding-right: 30px;
    }
    
    .header {
        display: flex;
        height: 50px;
        justify-content: center;
        align-items: center;
        background: rgb(59, 59, 59);
    }
    
    .header p {
        font-family: 'Roboto', sans-serif;
        font-size: 30px;
        color: rgb(255, 255, 255);
    }
    
    .map {
        height: 400px;
        width: 400px;
        transform: scale(2);
        margin: 60px 0px 30px 0px;
        position: relative;
    }
    
    .data-picker {
        display: flex;
        align-items: center;
        width: 200px;
    }
    
    .parameters {
        width: 200px;
        background: blue;
    }
    
    input[type="date"] {
        /* Estilos para o elemento de entrada */
        width: 200px;
        height: 40px;
        font-size: 16px;
        padding: 10px;
        border: 1px solid rgb(139, 133, 133);
        border-radius: 4px;
        box-sizing: border-box;
      
        /* Estilos para o calendário */
        background-color: rgb(219, 208, 208);
        box-shadow: 0 3px 6px rgba(58, 51, 51, 0.16), 0 3px 6px rgba(0,0,0,0.1);
        font-family: sans-serif;
      }
    
      .room {
        position: absolute;
        border: 1px solid black;
        background-color: transparent;
      }
    
      .room:hover {
        background-color: rgba(255, 255, 0, 0.5);
      }
`


function Home() {
    return (
        <div>
            <style jsx>{style}</style>
          <div className="header">
            <p>Mapa de sala</p>
          </div>
          <div className="main">
            <div className="data-picker"><input id="datepicker" type="date" /></div>
            <div className="map">
              <div className="room" id="aud" style={{
                top: '230px',
                left: '229px',
                width: '100px',
                height: '50px'
              }}></div>
              <div className="room" id="sala1" style={{
                top: '230px',
                left: '180px',
                width: '50px',
                height: '50px'
              }}></div>
              <div className="room" id="sala2" style={{
                top: '181px',
                left: '180px',
                width: '50px',
                height: '50px'
              }}></div>
              <div className="room" id="arquivo" style={{
                top: '181px',
                left: '141px',
                width: '40px',
                height: '35px',
                backgroundImage: 'url(./listra.png)'
              }}></div>
              <div className="room" id="sala4" style={{
                top: '181px',
                left: '73px',
                width: '50px',
                height: '35px'
              }}></div>
              <div className="room" id="sala4" style={{
                top: '230px',
                left: '73px',
                width: '70px',
                height: '50px'
              }}></div>
              <div className="room" id="info" style={{
                top: '181px',
                left: '122px',
                width: '20px',
                height: '35px'
              }}></div>
              <div className="room" style={{
                top: '230px',
                left: '142px',
                width: '26px',
                height: '35px',
                backgroundImage: 'url(./listra.png)'
              }}></div>
            </div>
            <div className="parameters"></div>
          </div>
        </div>
      )
}

export default Home