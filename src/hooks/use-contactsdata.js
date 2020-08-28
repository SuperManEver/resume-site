import { graphql, useStaticQuery } from "gatsby"

const useContacts = () => {
  const data = useStaticQuery(graphql`
    query ContactsInfo {
      dataJson {
        contacts {
          email
          jobTitle
          phone
          name
        }
      }
    }
  `)

  return data.dataJson.contacts
}

export default useContacts
