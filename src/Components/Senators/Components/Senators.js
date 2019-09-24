import React, { useState } from 'react';
import SenatorsJSON from '../senators.json';
import styled from 'styled-components';

import { MainCont } from './ComponentsMinor';
import { Row } from './ComponentsMinor';
// import { Col } from './ComponentsMinor';
import { SenatorList } from './ComponentsMinor';
import { SenatorListItem } from './ComponentsMinor';
import { SearchBar } from './ComponentsMinor';
import { SenatorLink } from './ComponentsMinor';
import { TitleMain } from './ComponentsMinor';
import { TitleMinor } from './ComponentsMinor';


const FilterSelect = styled.select`
  margin: 10px 30px;
  flex-wrap: wrap;
  height: 20px;
  width: 85px;
`;

const FilterRow = styled(Row)`
 justify-content: center;
`;

const FilterTitle = styled.span`
  margin: 10px;
  color: #A4A4A4;
`;


export default function Senators() {
  const [search, setSearch] = useState('')
  const [filterBy, setfilterBy] = useState({ party: '', gender: '', seniority: '' })
  const [filtered, setFiltered] = useState(SenatorsJSON)

  const handleChange = (e) => {
    if (e.target.value !== '-') {
      let filterByNew = filterBy
      filterByNew[e.target.title] = e.target.value
      setfilterBy(filterByNew)
    } else if (e.target.value === '-') {
      let filterByNew = filterBy
      filterByNew[e.target.title] = null
      setfilterBy(filterByNew)
    }
    // initializing filteredTemp to SenatorsJSON resets the filter with every change to make it the most accurate.
    let filteredTemp = SenatorsJSON
    if (filterBy.party) {filteredTemp = filteredTemp.filter(senator => senator.party === filterBy.party)}
    if (filterBy.gender) {filteredTemp = filteredTemp.filter(senator => senator.person.gender === filterBy.gender)}
    if (filterBy.seniority) {filteredTemp = filteredTemp.filter(senator => senator.senator_rank === filterBy.seniority)}

    setFiltered(filteredTemp)
  }

  return (
    <MainCont>
      <TitleMain>Senators of the USA</TitleMain>
      <Row>
        <SearchBar placeholder={'Search by Name, St, Gender, etc.'} value={search} title={'search'} onChange={(e) => setSearch(e.target.value.toLowerCase())}></SearchBar>
      </Row>
      <SenatorList>
        <FilterRow>
          <FilterTitle>filter by: </FilterTitle>
          <FilterSelect title={'party'} onChange={handleChange}>
            <option value={null} hidden selected disabled>Party</option>
            <option value={null}>-</option>
            <option value={'Democrat'}>Democrat</option>
            <option value={'Republican'}>Republican</option>
            <option value={'Independent'}>Independant</option>
          </FilterSelect>
          <FilterSelect title={'gender'} onChange={handleChange}>
            <option hidden selected disabled>Gender</option>
            <option >-</option>
            <option value={'male'}>Male</option>
            <option value={'female'}>Female</option>
          </FilterSelect>
          <FilterSelect title={'seniority'} onChange={handleChange}>
            <option value={null} hidden selected disabled>Seniority</option>
            <option value={null}>-</option>
            <option value={'senior'}>Senior</option>
            <option value={'junior'}>Junior</option>
          </FilterSelect>
        </FilterRow>
        <TitleMinor>List as of Jan. 2019</TitleMinor>
        {
          filtered.filter(senator => {
            return senator.person.firstname.toLowerCase().includes(search) ||
              senator.person.lastname.toLowerCase().includes(search) ||
              senator.party.toLowerCase().includes(search) ||
              senator.description.toLowerCase().includes(search)
          }).map(senator => {
            let { cspanid } = senator.person
            return <SenatorLink to={`/senator/${cspanid}`} key={cspanid}>
              <SenatorListItem>{`${senator.person.name}`}</SenatorListItem>
            </SenatorLink>
          })
        }
      </SenatorList>
    </MainCont>
  );
}
