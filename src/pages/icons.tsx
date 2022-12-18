import { NextPage } from 'next';
import { SiNodedotjs, SiTypescript } from 'react-icons/si'

const iconNames = ['Node.js', 'TypeScript'];

const Icon = ({ name }: { name: string}) => {
  if (name === 'Node.js') {
    return <SiNodedotjs />
  }
  if (name === 'TypeScript') {
    return <SiTypescript />
  }

  return <></>
}

const Icons: NextPage = () => {

  const mappedIcons = iconNames.map((icon) => <Icon name={icon} key={icon} />)

  return <>{mappedIcons}</>

}

export default Icons