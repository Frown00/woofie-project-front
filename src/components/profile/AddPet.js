import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './AddPet.module.scss';
import ImageEdit from '../common/form/ImageEdit';
import InputField from '../common/form/InputField';
import TextAreaField from '../common/form/TextareaField';
import SelectField from '../common/form/SelectField';


class AddPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      name: '',
      birthDate: '10-10-2019',
      specie: '',
      breed: '',
      description: '',
      allSpecies: [],
      isLoading: true
    }

    this.goBack = this.goBack.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.changeSelectedValue = this.changeSelectedValue.bind(this)
  }




  componentDidMount() {
    axios.get('http://localhost:8080/species/getAll')
      .then((species) => {
        this.setState({ allSpecies: species.data, isLoading: false })
      });


  }

  goBack() {
    this.props.history.goBack();
  }

  changeSelectedValue(selectedSpecies) {
    this.setState({
      species: selectedSpecies
    });
  }

  onChangeValue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });

  }

  onChangeImage(src) {
    this.setState({
      avatar: src
    })
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {

    const { isLoading, allSpecies } = this.state;
    let options = []
    if (isLoading) {
      options = []
    }
    else {
      options = allSpecies.map(species => species.name);
    }

    return (
      <div styleName="add-pet">
        <ul styleName="profile-navbar">
          <li onClick={this.goBack} styleName="profile-navbar__item go-back">
            Powrót
          </li>
        </ul>
        <h2>Dodaj zwierzę</h2>
        <form onSubmit={this.onSubmit}>
          <ImageEdit
            pet
            imageSrc={this.state.image}
            imageAlt="Pet image"
            onChange={this.onChangeImage}
          />
          <InputField
            label="Nazwa"
            name="name"
            type="text"
            value={this.state.name}
            placeholder="Azor"
            onChange={this.onChangeValue}
          />
          <InputField
            label="Data urodzenia"
            name="birthDate"
            type="date"
            placeholder=""
            value={this.state.birthDate}
            onChange={this.onChangeValue}
          />
          <SelectField
            select="Wybierz gatunek"
            options={options}
            onChange={this.changeSelectedValue} />
          <InputField
            label="Odmiana"
            name="breed"
            type="text"
            value={this.state.breed}
            placeholder="York"
            onChange={this.onChangeValue}
          />
          <TextAreaField
            minRows={3}
            maxRows={10}
            rows={3}
            name="description"
            placeholder="Opis"
            value={this.state.description}
            onChange={this.onChangeValue} />
          <input type="submit" value="Dodaj" styleName="add-pet__add-button" />
        </form>
      </div>
    )
  }
}

export default withRouter(CSSModules(AddPet, styles, { allowMultiple: true }));