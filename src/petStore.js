import { makeAutoObservable } from "mobx";
import { action, makeObservable, observable } from "mobx";
import petsData from "./petsData";

class PetStore {
  pets = petsData;

  constructor() {
    makeObservable(this, {
      pets: observable,
      handleAdopt: action,
    });
  }

  handleAdopt = (petId) => {
    this.pets = this.pets.filter((pet) => pet.id !== petId);
  };
  handleAddPet = (pet) => {
    pet.id = this.pets[this.pets.length - 1].id + 1;
    this.pets.push(pet);
  };
  handleUpdatePet = (selectedPet) => {
    this.pets = this.pets.map((pet) =>
      pet.id === selectedPet.id ? selectedPet : pet
    );
    console.log(selectedPet);
    console.log(this.pets);
  };
}

const petStore = new PetStore();
export default petStore;
