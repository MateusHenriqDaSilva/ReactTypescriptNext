import Pessoa from '../../components/Pessoa'

export default function exemploTs() {
    return (
        <div>
            <Pessoa nome="Joao" />
            <Pessoa nome="Mateus" idade={24} />
        </div>
    )
}