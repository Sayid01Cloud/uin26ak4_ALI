import './profile2.css'

function Profile2() {
    return ( 
        <article className='profile2'>
            <figure>
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Omar&backgroundColor=c0aede" alt="Karakter for Profil 2" />
            </figure>
            
            <section className= 'profile2-info'>
                <h2> Profile 2</h2>
                <p> Dette er fiktiv gruppemedlem 2</p>
                <a href= "mailto:pro2@hiof.no">pro2@hiof.no</a>
            </section>
        </article>
    );
}

export default Profile2;