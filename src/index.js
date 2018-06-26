import Senators from './data/senators'

export const republicans = () => {
  return Senators.filter(Senator => Senator.party === 'Republican')
}

export const democrats = () => {
  return Senators.filter(Senator => Senator.party === 'Democrat')
}

export const independents = () => {
  return Senators.filter(Senator => Senator.party === 'Independent')
}

export const males = () => {
  return Senators.filter(Senator => Senator.person.gender === 'male')
}

export const females = () => {
  return Senators.filter(Senator => Senator.person.gender === 'female')
}

export const byState = (state = 'UT') => {
  return Senators.filter(Senator => Senator.state === 'UT')
}

export const mapping = () => {
  return Senators.map(person => ({
    firstName: 'firstname',
    lastName: 'lastname',
    party: 'party',
    gender: 'gender',
  }))
}

export const birthplaceSeniorSenator = () => {
  return Senators
    .filter(Senator => Senator.state === 'UT' && Senator.senator_rank === 'senior')
    .reduce((previous, current) => current, {})
}
