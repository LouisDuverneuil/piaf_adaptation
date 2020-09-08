import axios from 'axios'

export async function getNewParagraph(theme) {
  let t = (["Validation méthode", "Conditionnement", "Gestion des risques", "Mise sur le marché", "Validation procédé", "Bonnes pratiques de fabrication", "Assurance qualité et BPF"].indexOf(theme) !== -1)
  ? '?theme='+theme
  : ''
  try {
    const res = await axios.get('/app/api/paragraph'+t,{timeout:3000});
    if (res && res.data && typeof res.data.text === 'string') {
      return res.data
    }else {
      return false
    }
  } catch (error) {
    return false
  }
}

export async function getNewQuestion(theme) {
  let t = (["Validation méthode", "Conditionnement", "Gestion des risques", "Mise sur le marché", "Validation procédé", "BPF", "Assurance qualité"].indexOf(theme) !== -1)
  ? '?theme='+theme
  : ''
  try {
    const res = await axios.get('/app/api/question'+t,{timeout:3000});
    if (res && res.data && typeof res.data.text === 'string') {
      return res.data
    }else {
      return false
    }
  } catch (error) {
    return false
  }
}

export async function reportQ(id) {
  try {
    const res = await axios.put('/app/api/question',{id:id},{timeout:3000});
    if (res && res.status === 201) {
      return true
    }else {
      return false
    }
  } catch (error) {
    return false
  }
}


export async function sendQA(qas) {
  try {
    const res = await axios.post('/app/api/paragraph',qas,{timeout:3000});
    if (res && res.status === 201) {
      return true
    }else {
      return false
    }
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
    return false
  }
}

export async function sendA(a) {
  try {
    const res = await axios.post('/app/api/question',a,{timeout:3000});
    if (res && res.status === 201) {
      return true
    }else {
      return false
    }
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
    return false
  }
}

export async function getUserDetails() {
  try {
    const res = await axios.get('/app/me',{timeout:3000});
    if (res && res.data && typeof res.data.email === 'string') {
      return res.data
    }else {
      return false
    }
  } catch (error) {
    return false
  }
}

export async function getDatasetInfo(theme) {
  let t = (['Ingénierie', 'R&D', 'Qualité', 'Affaires réglementaires', 'Anomalies', 'Laboratoire', 'Qualif valid'].indexOf(theme) !== -1)
  ? '?theme='+theme
  : ''
  try {
    const res = await axios.get('/app/api/datasets'+t,{timeout:3000});
    if (res && res.data && typeof res.data.count_pending_articles === 'number') {
      return res.data
    }else {
      return false
    }
  } catch (error) {
    return false
  }
}
