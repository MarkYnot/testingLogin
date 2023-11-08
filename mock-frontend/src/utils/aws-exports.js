const awsMobile = {
  Auth: {
    userPoolId:'ap-southeast-2_X7nibxiuU',
    region:'ap-southeast-2',
    userPoolWebClientId:'5kf086ppnepc1v152oqh4l0l3h'
  },

  API:{
    endpoints:[
      {
        name:'RealEstate-CRM-mark-service-agent',
        endpoint: 'https://qkl7gurlsg.execute-api.ap-southeast-2.amazonaws.com/prod/agent',
        region:'ap-southeast-2'
      }
    ]
  }

}

export default awsMobile;