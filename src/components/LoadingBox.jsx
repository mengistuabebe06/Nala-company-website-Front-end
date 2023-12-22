import spinner from '../assets/loading.gif'

export default function LoadingBox(){
    return (
        <div>
            <img
                src={spinner}
                style={{width: '180px', margin:'auto', display: 'block'}}
                alt= 'Loading ...'
            />
        </div>
    )
}