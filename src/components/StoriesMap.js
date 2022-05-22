import * as React from 'react';
import { Container } from 'react-bootstrap';
import Map, {
  Marker,

} from 'react-map-gl';
import pin from '../assets/pin.png'
import marker from '../assets/marker.png'



function StoriesMap() {
  return (
    <Container className='text-center my-5 py-5'>
      <h1 className='map-h1'>
        Share your story
      </h1>
      <p className='map-p pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus <br /> venenatis, lectus magna fringilla urna, porttitor</p>
      <Map
        mapStyle='mapbox://styles/mapbox/light-v9'
        mapboxAccessToken='pk.eyJ1IjoicmFmZmkyMyIsImEiOiJja2xlNTA4YXAweGF2MnBtMTNtYzJvcmxxIn0.1haDEhIRnVNmfKtLx9j5Ug'
        initialViewState={ {
          longitude: 100.6,
          latitude: 50.0,
          zoom: 1
        } }
        style={ { width: '{100 %}', height: 400 } }

      >
        <Marker latitude={ 22.0 } longitude={ 86.2 }>
          <img src={ pin }
            width={ 50 }
            height={ 50 }
          />

        </Marker>
        <Marker latitude={ 30.0 } longitude={ 60.2 }>
          <img src={ marker }
            width={ 50 }
            height={ 50 }
          />

        </Marker>
        <Marker latitude={ 60.0 } longitude={ 40.2 }>
          <img src={ pin }
            width={ 50 }
            height={ 50 }
          />

        </Marker>
        <Marker latitude={ 15.0 } longitude={ 10.2 }>
          <img src={ marker }
            width={ 50 }
            height={ 50 }
          />

        </Marker>
        <Marker latitude={ 70.0 } longitude={ 90.2 }>
          <img src={ pin }
            width={ 50 }
            height={ 50 }
          />

        </Marker>
        <Marker latitude={ -90.0 } longitude={ 60.2 }>
          <img src={ marker }
            width={ 50 }
            height={ 50 }
          />

        </Marker>

      </Map>
    </Container>
  );
}
export default StoriesMap