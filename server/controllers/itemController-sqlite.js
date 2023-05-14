const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "tweakasix.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to database");
    }
  }
);

const getItems = (req, res) => {
  db.serialize(() => {
    db.get(
      "SELECT * FROM model_parts where color_set_id < 100",
      (err, result) => {
    
        res.send(result);
      }
    );
  });
};

const addGuitar = (req, res) => {
  const {
    gtrname,
    tablefront,
    tableback,
    binding,
    side,
    neckwood,
    fretboard,
    fretbinding,
    frets,
    inlay,
    nut,
    metalpieces,
    pickup_cover,
    pickup_ring,
    knobs,
    texture_path,
    gloss,
    scratch,
    addedId,
    body,
    pickguard,
    single_plastic,
    single_metal,
    backplate,
  } = req.body;
  const sqlInsert = ` 
   INSERT INTO color_set (gtrname) VALUE (?);
   INSERT INTO model_parts (parts_id, color, guitar_id, part_name, color_set_id) VALUES 
   ((SELECT id FROM parts WHERE name = 'tablefront'), ?,${addedId}, 'tablefront', LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'tableback'), ?,${addedId}, 'tableback', LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'binding'), ?,${addedId},'binding' , LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'side'), ?,${addedId}, 'side', LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'neckwood'), ?,${addedId}, 'neckwood', LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'fretboard'), ?,${addedId},'fretboard' , LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'fretbinding'), ?,${addedId}, 'fretbinding' , LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'frets'), ?,${addedId},'frets' , LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'inlay'), ?,${addedId},'inlay' , LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'nut'), ?,${addedId},'nut' , LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'metalpieces'), ?,${addedId},'metalpieces' , LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'pickup_cover'), ?,${addedId}, 'pickup_cover', LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'pickup_ring'), ?,${addedId}, 'pickup_ring', LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'knobs'), ?,${addedId},'knobs' , LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'texture_path'), ?,${addedId}, 'texture_path', LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'gloss'), ?,${addedId}, 'gloss', LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'scratch'), ?,${addedId}, 'scratch', LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'body'), ?,${addedId}, 'body', LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'pickguard'), ?,${addedId}, 'pickguard', LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'single_plastic'), ?,${addedId}, 'single_plastic', LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'single_metal'), ?,${addedId}, 'single_metal', LAST_INSERT_ID()),
   ((SELECT id FROM parts WHERE name = 'backplate'), ?,${addedId}, 'backplate', LAST_INSERT_ID())
   `;

  try {
    db.run(
      sqlInsert,
      [
        gtrname,
        tablefront,
        tableback,
        binding,
        side,
        neckwood,
        fretboard,
        fretbinding,
        frets,
        inlay,
        nut,
        metalpieces,
        pickup_cover,
        pickup_ring,
        knobs,
        texture_path,
        gloss,
        scratch,
        body,
        pickguard,
        single_plastic,
        single_metal,
        backplate,
      ],
      (err, result) => {
        if (err) {
          throw err;
        }
        console.log(result);
        res.sendStatus(200);
      }
    );
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const getGuitars = (req, res) => {
  const sqlSelect =
    // "SELECT guitar_id FROM model_parts GROUP BY color_set;"
    ` SELECT 
  JSON_OBJECT(
    'id', mp.color_set_id,
    'guitar_id', mp.guitar_id,
   "binding", MAX(CASE WHEN p.name = "binding" THEN mp.color END),
    "fretbinding", MAX(CASE WHEN p.name = "fretbinding" THEN mp.color END),
    "fretboard", MAX(CASE WHEN p.name = "fretboard" THEN mp.color END),
    "frets", MAX(CASE WHEN p.name = "frets" THEN mp.color END),
    "gloss", MAX(CASE WHEN p.name = "gloss" THEN mp.color END),
    "inlay", MAX(CASE WHEN p.name = "inlay" THEN mp.color END),
    "knobs", MAX(CASE WHEN p.name = "knobs" THEN mp.color END),
    "metalpieces", MAX(CASE WHEN p.name = "metalpieces" THEN mp.color END),
    "neckwood", MAX(CASE WHEN p.name = "neckwood" THEN mp.color END),
    "nut", MAX(CASE WHEN p.name = "nut" THEN mp.color END),
    "pickup_cover", MAX(CASE WHEN p.name = "pickup_cover" THEN mp.color END),
    "pickup_ring", MAX(CASE WHEN p.name = "pickup_ring" THEN mp.color END),
    "scratch", MAX(CASE WHEN p.name = "scratch" THEN mp.color END),
    "side", MAX(CASE WHEN p.name = "side" THEN mp.color END),
    "tableback", MAX(CASE WHEN p.name = "tableback" THEN mp.color END),
    "tablefront", MAX(CASE WHEN p.name = "tablefront" THEN mp.color END),
    "texture_path", MAX(CASE WHEN p.name = "texture_path" THEN mp.color END),
    "body", MAX(CASE WHEN p.name = "body" THEN mp.color END),
    "pickguard", MAX(CASE WHEN p.name = "pickguard" THEN mp.color END),
    "single_plastic", MAX(CASE WHEN p.name = "single_plastic" THEN mp.color END),
    "single_metal", MAX(CASE WHEN p.name = "single_metal" THEN mp.color END),
    "backplate", MAX(CASE WHEN p.name = "backplate" THEN mp.color END)
) AS parts
FROM 
  model_parts mp 
  JOIN parts p ON mp.parts_id = p.id 
WHERE
  mp.color_set_id < 100
GROUP BY 
mp.guitar_id,
  mp.color_set_id;`;

  db.all(sqlSelect, (err, result) => {
   
    // guitarlist.push(JSON.parse(result.parts))
     res.send(result.map(({parts}) => JSON.parse(parts)));
    // console.log(guitarlist)
  }); 

};

module.exports = { getItems, addGuitar, getGuitars };
