const pointsCirc = createPoints();

function createPoints() {
    const points = [];
    // how many points do we need
    const numPoints = 6;
    // used to equally space each point around the circle
    const angleStep = (Math.PI * 2) / numPoints;
    // the radius of the circle
    const rad = 90;
  
    for (let i = 1; i <= numPoints; i++) {
      // x & y coordinates of the current point
      const theta = i * angleStep;
  
      const x = 100 + Math.cos(theta) * rad;
      const y = 100 + Math.sin(theta) * rad;
  
      // store the point's position
      points.push({
        x: x,
        y: y,
        // we need to keep a reference to the point's original point for when we modulate the values later
        originX: x,
        originY: y,
        // more on this in a moment!
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000
      });
    }
  
    return points;
}

const rectX1 = 153;
const rectX2 = 37;


const pointsRect = [
    {
        "x": rectX1,
        "y": 180,
        "originX": rectX1,
        "originY": 180,
        "noiseOffsetX": 558.0054507166818,
        "noiseOffsetY": 349.83067313484526
    },
    {
        "x": rectX2,
        "y": 180,
        "originX": rectX2,
        "originY": 180,
        "noiseOffsetX": 405.21496962909123,
        "noiseOffsetY": 687.5832743094305
    },
    {
        "x": 10,
        "y": 100,
        "originX": 10,
        "originY": 105,
        "noiseOffsetX": 148.27632266015266,
        "noiseOffsetY": 700.6666840437977
    },
    {
        "x": rectX2,
        "y": 20,
        "originX": rectX2,
        "originY": 20,
        "noiseOffsetX": 543.8732046468922,
        "noiseOffsetY": 948.3602990549396
    },
    {
        "x": rectX1,
        "y": 20,
        "originX": rectX1,
        "originY": 20,
        "noiseOffsetX": 48.40367548042579,
        "noiseOffsetY": 684.8607444860912
    },
    {
        "x": 190,
        "y": 100,
        "originX": 190,
        "originY": 100,
        "noiseOffsetX": 276.56017522498774,
        "noiseOffsetY": 973.3632880698875
    }
];

const pointsHeroMob = [
    {
        "x": 230,
        "y": 170,
        "originX": 230,
        "originY": 170,
        "noiseOffsetX": 558.0054507166818,
        "noiseOffsetY": 349.83067313484526
    },
    {
        "x": 50,
        "y": 180,
        "originX": 50,
        "originY": 180,
        "noiseOffsetX": 405.21496962909123,
        "noiseOffsetY": 687.5832743094305
    },
    {
        "x": -30,
        "y": 140,
        "originX": -30,
        "originY": 100,
        "noiseOffsetX": 148.27632266015266,
        "noiseOffsetY": 700.6666840437977
    },
    {
        "x": 0,
        "y": -10,
        "originX": 0,
        "originY": -10,
        "noiseOffsetX": 543.8732046468922,
        "noiseOffsetY": 948.3602990549396
    },
    {
        "x": 200,
        "y": -10,
        "originX": 200,
        "originY": -10,
        "noiseOffsetX": 48.40367548042579,
        "noiseOffsetY": 684.8607444860912
    },
    {
        "x": 230,
        "y": 100,
        "originX": 230,
        "originY": 100,
        "noiseOffsetX": 276.56017522498774,
        "noiseOffsetY": 973.3632880698875
    }
];

const pointsHeroDesk = [
    {
        "x": 150,
        "y": 170,
        "originX": 150,
        "originY": 170,
        "noiseOffsetX": 558.0054507166818,
        "noiseOffsetY": 349.83067313484526
    },
    {
        "x": 50,
        "y": 170,
        "originX": 50,
        "originY": 170,
        "noiseOffsetX": 405.21496962909123,
        "noiseOffsetY": 687.5832743094305
    },
    {
        "x": -30,
        "y": 100,
        "originX": -30,
        "originY": 105,
        "noiseOffsetX": 148.27632266015266,
        "noiseOffsetY": 700.6666840437977
    },
    {
        "x": 0,
        "y": -10,
        "originX": 0,
        "originY": -10,
        "noiseOffsetX": 543.8732046468922,
        "noiseOffsetY": 948.3602990549396
    },
    {
        "x": 200,
        "y": -10,
        "originX": 200,
        "originY": -10,
        "noiseOffsetX": 48.40367548042579,
        "noiseOffsetY": 684.8607444860912
    },
    {
        "x": 230,
        "y": 100,
        "originX": 230,
        "originY": 100,
        "noiseOffsetX": 276.56017522498774,
        "noiseOffsetY": 973.3632880698875
    }
];

export { pointsCirc, pointsRect, pointsHeroDesk, pointsHeroMob }