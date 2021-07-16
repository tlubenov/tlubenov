
const logos = require.context('./logos', true, /\.svg$/);
const pngs = require.context('./logos', true, /\.png$/);

const technology = {
    tech: [
    {
        id: 1,
        description: 'Apache Airflow',
        uri: 'https://airflow.apache.org/',
        icon: logos('./apache-airflow.svg'),
        category: ''
    },

    {
        id: 3,
        description: 'Apache Impala',
        uri: 'https://impala.apache.org/',
        icon: logos('./apache-impala.svg'),
        category: 'SQL engine'
    },
    {
        id: 4,
        description: 'Apache Spark',
        uri: 'https://spark.apache.org/',
        icon: logos('./apache-spark.svg')
    },
    {
        id: 5,
        description: 'AWS',
        uri: 'https://aws.amazon.com/',
        icon: logos('./aws.svg'),
        category: 'Cloud'
    },
    {
        id: 6,
        description: 'Boken',
        uri: 'https://bokeh.org/',
        icon: logos('./bokeh.svg'),
        category: 'visualization library'
    },
    {
        id: 7,
        description: 'C Language',
        uri: 'https://www.iso.org/standard/74528.html',
        icon: logos('./c.svg')
    },
    {
        id: 7,
        description: 'Dask',
        uri: 'https://dask.org/',
        icon: logos('./dask.svg')
    },
    {
        id: 8,
        description: 'Debian',
        uri: 'https://www.debian.org/',
        icon: logos('./debian.svg'),
        category: 'OS'
    },
    {
        id: 9,
        description: 'DigitalOcean',
        uri: 'https://www.digitalocean.com/',
        icon: logos('./digitalocean.svg'),
        category: 'Cloud'
    },
    {
        id: 10,
        description: 'Django',
        uri: 'https://www.djangoproject.com/',
        icon: logos('./django-community.svg'),
        category: 'Framework'
    },
    {
        id: 11,
        description: 'DJI',
        uri: 'https://www.dji.com/',
        icon: logos('./dji.svg'),
        category: 'Drone'
    },
    {
        id: 12,
        description: 'Docker',
        uri: 'https://www.docker.com/',
        icon: logos('./docker.svg')
    },
    {
        id: 13,
        description: 'Express',
        uri: 'https://expressjs.com/',
        icon: logos('./express.svg')
    },
    {
        id: 13,
        description: 'Fortran',
        uri: 'https://www.fortran.com/',
        icon: logos('./fortran.svg')
    },
    {
        id: 14,
        description: 'GDAL',
        uri: 'https://gdal.org/',
        icon: logos('./gdal.svg'),
        category: 'Geospatial Library'
    },
    {
        id: 15,
        description: 'geoserver',
        uri: 'http://geoserver.org/',
        icon: pngs('./geoserver.png'),
        category: 'Web Map Server'
    },
    {
        id: 16,
        description: 'git',
        uri: 'https://git-scm.com/',
        icon: logos('./git.svg'),
        category: 'Source Control'
    },
    {
        id: 17,
        description: 'Google Cloud',
        uri: 'https://cloud.google.com/',
        icon: logos('./google-cloud.svg')
    },
    {
        id: 18,
        description: 'Google Earth',
        uri: 'https://www.google.com/earth/',
        icon: logos('./google-earth.svg')
    },
    {
        id: 19,
        description: 'GoLang',
        uri: 'https://golang.org/',
        icon: logos('./gopher.svg'),
        category: 'language'
    },
    {
        id: 20,
        description: 'GraphQL',
        uri: 'http://graphql.org/',
        icon: logos('./graphql.svg')
    },
    {
        id: 21,
        description: 'GrassGIS',
        uri: 'https://grass.osgeo.org/',
        icon: logos('./grassgis.svg'),
        category: 'GIS'
    },
    {
        id: 22,
        description: 'Apache HTTPD Server',
        uri: 'https://httpd.apache.org/',
        icon: logos('./httpd-server.svg'),
        category: 'Web Server'
    },
    {
        id: 23,
        description: 'iD Editor',
        uri: 'http://ideditor.com/',
        icon: logos('./iD-editor.svg'),
        category: 'Web Mapping Client'
    },
    {
        id: 24,
        description: 'Java',
        uri: 'https://www.java.com/en/',
        icon: logos('./java.svg'),
        category: 'language'
    },
    {
        id: 25,
        description: 'JOSM',
        uri: 'https://josm.openstreetmap.de/',
        icon: logos('./josm.svg'),
        category: 'OSM Desktop Client'
    },
    {
        id: 26,
        description: 'JavaScript',
        uri: 'https://www.javascript.com/',
        icon: logos('./js.svg'),
        category: 'language'
    },
    {
        id: 27,
        description: 'kubernetes',
        uri: 'https://kubernetes.io/',
        icon: logos('./kubernets.svg')
    },
    {
        id: 28,
        description: 'LeafletJS',
        uri: 'https://leafletjs.com/',
        icon: logos('./leafletjs.svg'),
        category: 'Web Map Library'
    },
    {
        id: 29,
        description: 'Linux',
        uri: 'https://www.linux.org/',
        icon: logos('./linux.svg'),
        category: 'OS'
    },
    {
        id: 30,
        description: 'MapBox',
        uri: 'https://www.mapbox.com/',
        icon: logos('./mapbox.svg'),
        category: 'Web Map API'
    },
    {
        id: 31,
        description: 'MapInfo',
        uri: 'http://www.geobis.com/mapinfo-gis-software/',
        icon: logos('./mapinfo.svg'),
        category: 'GIS'
    },
    {
        id: 32,
        description: 'mapserver',
        uri: 'https://mapserver.org/',
        icon: logos('./mapserver.svg'),
        category: 'Web Map Server'
    },
    {
        id: 33,
        description: 'matplotlib',
        uri: 'https://matplotlib.org/',
        icon: logos('./matplotlib.svg'),
        category: 'visualization library'
    },
    {
        id: 34,
        description: 'mongodb',
        uri: 'https://www.mongodb.com/',
        icon: logos('./mongodb.svg'),
        category: 'NoSQL Database'
    },
    {
        id: 35,
        description: 'nginx',
        uri: 'https://www.nginx.com/',
        icon: logos('./nginx.svg'),
        category: 'Web Server'
    },
    {
        id: 36,
        description: 'nodejs',
        uri: 'https://nodejs.org/',
        icon: logos('./nodejs.svg'),
        category: 'JavaScript Server Side Engine'
    },
    {
        id: 37,
        description: 'numba',
        uri: 'https://numba.pydata.org/',
        icon: logos('./numba.svg'),
        category: 'python library'
    },
    {
        id: 38,
        description: 'numpy',
        uri: 'https://numpy.org/',
        icon: logos('./numpy.svg'),
        category: 'python numerical library'
    },
    {
        id: 39,
        description: 'OpenLayers',
        uri: 'https://openlayers.org/',
        icon: logos('./openlayers.svg'),
        category: 'Web Map Library'
    },
    {
        id: 40,
        description: 'OpenStreetMap',
        uri: 'https://www.openstreetmap.org/',
        icon: logos('./openstreetmap.svg'),
        category: 'OSM Project'
    },
    {
        id: 41,
        description: 'OSGeo',
        uri: 'https://www.osgeo.org/',
        icon: logos('./osgeo.svg'),
        category: 'Organization'
    },
    {
        id: 42,
        description: 'pandas',
        uri: 'https://pandas.pydata.org/',
        icon: logos('./pandas.svg'),
        category: 'python data library'
    },
    {
        id: 43,
        description: 'postgis',
        uri: 'https://postgis.net/',
        icon: logos('./postgis.svg'),
        category: 'RDS Geospatial Extension'
    },
    {
        id: 44,
        description: 'PostgreSQL',
        uri: 'https://www.postgresql.org/',
        icon: logos('./postgresql.svg'),
        category: 'SQL RDS Database'
    },
    {
        id: 45,
        description: 'PROJ4',
        uri: 'https://proj.org/',
        icon: logos('./proj4.svg'),
        category: 'Geospatial Transformations Library'
    },
    {
        id: 46,
        description: 'Python',
        uri: 'https://www.python.org/',
        icon: logos('./python.svg'),
        category: 'language'
    },
    {
        id: 47,
        description: 'PyTorch',
        uri: 'https://pytorch.org/',
        icon: logos('./pytorch.svg'),
        category: 'ML, Deep Learning Framework'
    },
    {
        id: 48,
        description: 'QGIS',
        uri: 'https://qgis.org/en/site/',
        icon: logos('./qgis.svg'),
        category: 'GIS'
    },
    {
        id: 49,
        description: 'RabbitMQ',
        uri: 'https://www.rabbitmq.com/',
        icon: logos('./rabbitmq.svg'),
        category: 'message queue'
    },
    {
        id: 50,
        description: 'Redis',
        uri: 'https://redis.io',
        icon: logos('./redis.svg'),
        category: 'In Memory Key-Value Database'
    },
    {
        id: 51,
        description: 'Ruby',
        uri: 'https://www.ruby-lang.org/',
        icon: logos('./ruby.svg'),
        category: 'language'
    },
    {
        id: 52,
        description: 'Ruby On Rails',
        uri: 'https://rubyonrails.org/',
        icon: logos('./ruby-on-rails.svg'),
        category: 'Web Framework'
    },
    {
        id: 53,
        description: 'ScikitLearn',
        uri: 'https://scikit-learn.org/stable/',
        icon: logos('./scikit-learn.svg'),
        category: 'ML Toolkit'
    },
    {
        id: 54,
        description: 'Seaborn',
        uri: 'https://seaborn.pydata.org/',
        icon: logos('./seaborn.svg'),
        category: 'Visualization Library'
    },
    {
        id: 55,
        description: 'Superset',
        uri: 'https://superset.apache.org/',
        icon: logos('./superset.svg'),
        category: ''
    },
    {
        id: 56,
        description: 'Terraform',
        uri: 'https://www.terraform.io/',
        icon: logos('./terraform.svg'),
        category: ''
    },
    {
        id: 57,
        description: 'TypeScript',
        uri: 'https://www.typescriptlang.org/',
        icon: logos('./typescript.svg'),
        category: 'language'
    },
    {
        id: 58,
        description: 'Vagrant',
        uri: 'https://www.vagrantup.com/',
        icon: logos('./vagrant.svg'),
        category: ''
    },
    {
        id: 59,
        description: 'VirtualBox',
        uri: 'https://www.virtualbox.org/',
        icon: logos('./virtualbox.svg'),
        category: 'Virtual Machine Software'
    },
    {
        id: 60,
        description: 'VueJS',
        uri: 'https://vuejs.org/',
        icon: logos('./vuejs.svg'),
        category: 'Reactive Web App Library'
    }
  ]
}


export default technology;
