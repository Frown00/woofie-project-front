import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUserData } from '../../actions/authAction';
import CSSModules from 'react-css-modules';
import styles from './AddPet.module.scss';
import ImageEdit from '../common/form/ImageEdit';
import InputField from '../common/form/InputField';
import TextAreaField from '../common/form/TextareaField';
import SelectField from '../common/form/SelectField';
import setAuthToken from '../../utils/setAuthToken';


class AddPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      name: '',
      birthDate: '10-10-2019',
      species: '',
      breed: '',
      description: '',
      allSpecies: [],
      isLoading: true
    }

    this.goBack = this.goBack.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChangeImage = this.onChangeImage.bind(this);
    this.addPet = this.addPet.bind(this);
    this.changeSelectedValue = this.changeSelectedValue.bind(this)
  }




  componentDidMount() {
    const token = localStorage.getItem("oauthToken");
    console.log(token);
    setAuthToken(token);
    axios.get('http://localhost:8080/api/species/getAll')
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

  addPet(e) {
    e.preventDefault();
    const ownerId = this.props.oauth.user.id;
    const speciesId = this.state.allSpecies.filter((sp) => sp.name === this.state.species)[0].id;


    axios.post(
      'http://localhost:8080/api/pets/create',
      {
        birthDate: this.state.birthDate,
        breed: this.state.breed,
        description: this.state.description,
        name: this.state.name,
        speciesId: speciesId,
        ownerId: ownerId
      }
    ).then((res) => {
      this.props.updateUserData();
      this.props.history.push("/account/profile/pets")

    })

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
        <form styleName="add-pet__form" onSubmit={this.addPet}>
          <h2>Dodaj zwierzę</h2>
          <ImageEdit
            pet={true}
            imageSrc={this.state.image}
            imageAlt="Pet image"
            width={150}
            height={150}
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
            noOptions="Brak gatunków"
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
            onChange={this.onChangeValue}
          />
          <input type="submit" value="Dodaj" styleName="add-pet__add-button" />
        </form>
      </div>
    )
  }
}

AddPet.propTypes = {
  /** Required to check if user is currently log on*/
  oauth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  oauth: state.oauth,
})

export default connect(mapStateToProps, { updateUserData })
  (
    withRouter(CSSModules(AddPet, styles, { allowMultiple: true }))
  )