import fetch from "isomorphic-fetch";
import { useRouter } from "next/router";
import Container from "../../components/Conteiner";

const User = ({user}) => {

    const router = useRouter();
    const obj = router.query;

    return (
        <Container>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header text-center">
                            <img src={user.avatar} alt="" style={{borderRadius: '50%'}}/>
                        </div>
                        <div className="card-body text-center">
                            <h3>{user.id} {user.first_name} {user.last_name}</h3>
                            <p>{user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )

}

User.getInitialProps = async (ctx) => {

    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
    const resJson = await res.json();
    return {user: resJson.data};
}

export default User;