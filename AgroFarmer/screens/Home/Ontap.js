import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Divider,Avatar} from 'react-native-paper';
import { StyleSheet, ImageBackground, Text, Image, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Entypo'
let like = []
let nope = []
export default class Exemple extends Component {

  componentDidMount() {
    let ind = [];
    for (let index = 0; index < this.state.cards.length; index++) {
      ind[index] = 0;

    }
    this.setState({
      ind: this.state.ind
    })
  }
  constructor(props) {
    super(props)
    this.state = {
      progress: 0,
      ind: [],
      cards: [
        {
          
          image: [require('../images/tomato.png')]
        },
        {
         
          image:  [require('../images/tomato.png')]
        },
        {
          
          image: [require('../images/tomato.png')]
        },
        {
          
          image: [require('../images/tomato.png')]
        },
        {
          
          image: [require('../images/tomato.png')]
        },
      ],
      no: 0,
      swipedAllCards: false,
      swipeDirection: '',
      inumber: 0,
      cardIndex: 0,
      presentcard: 0
    }
  }

  renderCard = (cards, cardIndex) => {

    return (
      <View style={styles.card}>
        <ImageBackground  imageStyle={{ borderRadius: 16 }} style={{ flex: 1 , marginBottom:10}} >
           <Image source={cards.image[this.state.inumber]} style={{borderRadius:8,height:200,width:'100%'}}></Image>
           <View style={{flexDirection:'row',paddingTop:15}}>
            <Avatar.Image size={125}  source={require('../images/farmer.jpg')} />
                 <View style={{flexDirection:'column',paddingLeft:8,paddingTop:12}}>
                    <Text style={{fontSize:22}}>NAME:-----</Text>
                    <Text style={{fontSize:22}}>DISTANCE:-----</Text>
                    <Text style={{fontSize:22}}>RATING:-----</Text>
                 </View>
                 <View style={{paddingTop:100}}>
                 <Avatar.Text size={70} label="18/-" />
                 </View>
                
           </View>
        </ImageBackground>
       
      </View>
    )
  };

  onSwiped = (type) => {

    this.setState({
      no: this.state.no + 1
    })
  }

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    })

  };

  swipeLeft = () => {
    this.swiper.swipeLeft()

  };

  render() {
    return (
      <View style={styles.container}>

        <View style={{ flex:1}}>
          <Swiper
            backgroundColor={'white'}
            ref={swiper => {
              this.swiper = swiper
            }}

            onSwiped={() => this.onSwiped('general')}
            onSwipedLeft={(cardIndex) => {
              this.onSwiped('left')
              this.setState({
                inumber: 0
              })
              nope.push(cardIndex)
            }}
            onSwipedRight={(cardIndex) => {
              this.onSwiped('right')
              this.setState({
                inumber: 0,

              })
              like.push(cardIndex)
            }}

            onSwipedBottom={() => this.onSwiped('bottom')}

            cards={this.state.cards}

          
            renderCard={this.renderCard}
            onSwipedAll={this.onSwipedAllCards}
            stackSize={3}
            
            cardIndex={this.state.cardIndex}
            disableBottomSwipe={true}
            disableTopSwipe={true}
       
            overlayLabels={{
              bottom: {
                element: <Icon1 name="circle-with-cross" size={150} color="green" /> ,
                style: {
                  label: {
                    backgroundColor: 'black',
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }
                }
              },
              left: {
                element: <Icon1 name="circle-with-cross" size={130} color="red" /> ,
                style: {
                  label: {
                    backgroundColor: 'white',
                    borderColor: 'red',
                    color: 'red',
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: -30
                  }
                }
              },
              right: {
                element: <Icon name="cart-plus" size={150} color="green" /> ,
               
                
                
                style: {
                  label: {
                    backgroundColor: 'white',
                    borderColor: 'green',
                    color: 'green',
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: 30,
                    marginLeft: 30
                  }
                }
              },
              top: {
                title: 'SUPER LIKE',
                style: {
                  label: {
                    backgroundColor: 'black',
                    borderColor: 'black',
                    color: 'white',
                    borderWidth: 1
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }
                }
              }
            }}

            animateOverlayLabelsOpacity
            animateCardOpacity
            swipeBackCard

          >
             </Swiper>
        </View>

       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  card: {
    height: 400,
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: 'white',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: "black",

  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 5
  },
  circle1: {
    width: 40,
    height: 40,

    borderRadius: 40 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    elevation: 5
  }

})