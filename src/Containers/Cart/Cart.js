import React, { Component } from "react";
import PhoneBag from "../../Components/PhoneBag/PhoneBag";
import Header from "../../Components/Header/Header";
import Phone from "../../Components/PhoneBag/Phone/Phone";
import samsung from "../../Assets/img/samsung.jpg";
import iphone from "../../Assets/img/iphone.png";
import pixel from "../../Assets/img/pixel.png";
import redmi from "../../Assets/img/redmi_note_9_pro_max.png";
import TotalExpense from "../../Components/PhoneBag/TotalExpense/TotalExpense";

class Cart extends Component {
  state = {
    phones: [
      {
        name: "Samsung Galaxy S20 Fe",
        price: 1100,
        image: samsung,
        id: "S20",
        phoneCount: 1,
      },
      {
        name: "Iphone 12pro",
        price: 1350,
        image: iphone,
        id: "12Pro",
        phoneCount: 1,
      },
      {
        name: "Google Pixel 3",
        price: 750,
        image: pixel,
        id: "Pixel3",
        phoneCount: 1,
      },
      {
        name: "Redmi Mi Note 9 pro",
        price: 550,
        image: redmi,
        id: "Note 9",
        phoneCount: 1,
      },
    ],
    totalCount: 4,
    totalPrice: 3750,
    showCart: true,
    showPhone: true,
  };

  clearCartHandler = () => {
    this.setState({
      showCart: false,
      totalCount: 0,
    });
  };

  incrementPhoneCountHandler = (id) => {
    const phonesUpdated = this.state.phones; //Copying Object
    const index = phonesUpdated.findIndex((item) => item.id === id);
    phonesUpdated[index].phoneCount += 1;

    let updatedTotalCount = this.state.totalCount;
    updatedTotalCount += 1;

    let updatedTotalPrice = this.state.totalPrice;
    updatedTotalPrice += phonesUpdated[index].price;

    this.setState({
      phones: [...phonesUpdated],
      totalCount: updatedTotalCount,
      totalPrice: updatedTotalPrice,
    });
  };

  decrementPhoneCountHandler = (id) => {
    const phonesUpdated = this.state.phones; //Copying Object
    const index = phonesUpdated.findIndex((item) => item.id === id);
    phonesUpdated[index].phoneCount -= 1;

    let updatedTotalCount = this.state.totalCount;
    updatedTotalCount -= 1;

    let updatedTotalPrice = this.state.totalPrice;
    updatedTotalPrice -= phonesUpdated[index].price;

    if (!phonesUpdated[index].phoneCount) {
      phonesUpdated.splice(index, 1);
    }
    this.setState({
      phones: [...phonesUpdated],
      totalCount: updatedTotalCount,
      totalPrice: updatedTotalPrice,
    });
  };
  removePhoneFromCartHandler = (id) => {
    let phonesUpdated = this.state.phones; //Copying Object
    const index = phonesUpdated.findIndex((item) => item.id === id);

    let updatedTotalCount = this.state.totalCount;
    updatedTotalCount -= phonesUpdated[index].phoneCount;

    let updatedTotalPrice = this.state.totalPrice;
    updatedTotalPrice -=
      phonesUpdated[index].price * phonesUpdated[index].phoneCount;

    // phonesUpdated.splice(index, 1); //Both Works Fine!!
    phonesUpdated = phonesUpdated.filter((_, id) => index !== id);

    this.setState({
      phones: [...phonesUpdated],
      totalCount: updatedTotalCount,
      totalPrice: updatedTotalPrice,
    });
  };

  render() {
    const phones = this.state.phones;
    let phoneCart = (
      <p
        style={{
          fontSize: "25px",
          letterSpacing: "3px",
          color: "grey",
          textAlign: "center",
        }}
      >
        is Currently Empty
      </p>
    );
    let totalExpense = null;
    if (this.state.showCart && this.state.phones.length) {
      totalExpense = (
        <TotalExpense
          clearCart={this.clearCartHandler}
          totalPrice={this.state.totalPrice}
        />
      );

      phoneCart = phones.map((phone) => (
        <Phone
          key={phone.id}
          name={phone.name}
          price={phone.price}
          image={phone.image}
          phoneCount={phone.phoneCount}
          incrementCount={() => this.incrementPhoneCountHandler(phone.id)}
          decrementCount={() => this.decrementPhoneCountHandler(phone.id)}
          removePhone={() => this.removePhoneFromCartHandler(phone.id)}
        />
      ));
    }
    return (
      <main>
        <Header totalCount={this.state.totalCount} />
        <PhoneBag>
          {phoneCart}
          {totalExpense}
        </PhoneBag>
      </main>
    );
  }
}
export default Cart;
