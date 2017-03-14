import React, { Component } from 'react';
import {
  Image,
  Dimensions,
  View
} from 'react-native';

export default class AutoImage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imgWidth: 0,
      imgHeight: 0
    }
  }

  componentDidMount() {
    Image.getSize(
      this.props.source, 
      (w, h) => { 
        this.setState({
          imgHeight: h,
          imgWidth: w
        })
      },
      (err) => {
        console.log(err)
      }
    )
  }

  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center'
      }}>
        <Image
          source={{uri: this.props.source }}
          style={[
            this.props.style, 
            /*{
              width: Dimensions.get('window').width < this.state.imgWidth ? this.state.imgWidth : '100%',
              height: 
                Dimensions.get('window').width * 
                this.state.imgHeight / 
                this.state.imgWidth
            }*/
            Dimensions.get('window').width > this.state.imgWidth ?
            {
              width: this.state.imgWidth,
              height: this.state.imgHeight
            } : {
              width: Dimensions.get('window').width,
              height: 
                Dimensions.get('window').width * 
                this.state.imgHeight / 
                this.state.imgWidth
            }
          ]}
        />
      </View>
    )
  }
}