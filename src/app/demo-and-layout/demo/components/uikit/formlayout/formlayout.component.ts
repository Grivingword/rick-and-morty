import { Component, OnInit } from '@angular/core';
import { CountryService } from "../../../service/country.service";

@Component({
    templateUrl: './formlayout.component.html'
})
export class FormLayoutComponent implements OnInit{
  countries: any;

  cascadeSelectCountries: any[] | undefined;

  cities: any[] | undefined;

  filteredCountries: any[] | undefined;

  value1: any;

  value2: any;

  value3: any;

  value4: any;

  value5: any;

  value6: any;

  value7: any;

  value8: any;

  value9: any;

  value10: any;

  value11: any;

  valueIconLeft: any;

  valueIconRight: any;
    selectedState: any;
  constructor(private countryService: CountryService) {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
    ];
  }

  ngOnInit() {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });
    this.cascadeSelectCountries = [
      {
        name: 'Australia',
        code: 'AU',
        states: [
          {
            name: 'New South Wales',
            cities: [
              {cname: 'Sydney', code: 'A-SY'},
              {cname: 'Newcastle', code: 'A-NE'},
              {cname: 'Wollongong', code: 'A-WO'}
            ]
          },
          {
            name: 'Queensland',
            cities: [
              {cname: 'Brisbane', code: 'A-BR'},
              {cname: 'Townsville', code: 'A-TO'}
            ]
          },

        ]
      },
      {
        name: 'Canada',
        code: 'CA',
        states: [
          {
            name: 'Quebec',
            cities: [
              {cname: 'Montreal', code: 'C-MO'},
              {cname: 'Quebec City', code: 'C-QU'}
            ]
          },
          {
            name: 'Ontario',
            cities: [
              {cname: 'Ottawa', code: 'C-OT'},
              {cname: 'Toronto', code: 'C-TO'}
            ]
          },

        ]
      },
      {
        name: 'United States',
        code: 'US',
        states: [
          {
            name: 'California',
            cities: [
              {cname: 'Los Angeles', code: 'US-LA'},
              {cname: 'San Diego', code: 'US-SD'},
              {cname: 'San Francisco', code: 'US-SF'}
            ]
          },
          {
            name: 'Florida',
            cities: [
              {cname: 'Jacksonville', code: 'US-JA'},
              {cname: 'Miami', code: 'US-MI'},
              {cname: 'Tampa', code: 'US-TA'},
              {cname: 'Orlando', code: 'US-OR'}
            ]
          },
          {
            name: 'Texas',
            cities: [
              {cname: 'Austin', code: 'US-AU'},
              {cname: 'Dallas', code: 'US-DA'},
              {cname: 'Houston', code: 'US-HO'}
            ]
          }
        ]
      }
    ];
  }

  searchCountry(event: { query: any; }) {
    let filtered : any[] = [];
    let query = event.query;
    for(let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }


    dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];
}
