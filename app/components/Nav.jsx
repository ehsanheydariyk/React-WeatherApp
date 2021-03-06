var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass ({
  onSearch: function (e){
    e.preventDefault();

    var location = this.refs.search.value;
    var encondedLocation = encodeURIComponent(location);
    if (location.length > 0){
      this.refs.search.value = '';
      window.location.hash = '#/?location='+encondedLocation;
    };
  },
  render: function(){
    return (
      <div calssName="top-bar">
        <div className='top-bar-left'>
          <ul className='menu'>
            <li calssName='menu-text'>React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather from me</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </li>
            <li>
              <Link to="/table" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Table</Link>
            </li>
          </ul>
        </div>
        <div className='top-bar-right'>
          <form onSubmit={this.onSearch}>
            <ul className='menu'>
              <li>
                <input type="search" ref='search' placeholder="Search Weather"/>
              </li>
              <li>
                <input type="submit" className="button hollow" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
