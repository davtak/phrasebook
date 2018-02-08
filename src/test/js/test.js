
var contentModel = {
    "brcl_code" : "dhan",
    "schema" : [],
    "last_save" : "sometime"
};

var example_schema =
    
    [
	{
	    "name" : "LANGTOK",
	    "entries" : [
	    "I don't capisco",
	    "I don't speak [EL IDIOMA]",
	    "I only speak a little [ESE IDIOMA]",
	    "Please, hablar mas lento",
	    "Plis, otra vez say this",
	    "Digame otra vez eso que dijo al fin vosmerc",
	    "QUID DIXISTI?",
	    "Κατa-scribe istud, preḱor",
	    "Fasne andara teangann?"
	    ]
	},
	{
	    "name" : "SALUTATIONZ",
	    "entries": [
		"Hiyo!",
		"Good morning",
		"Good day",
		"Good evening",
		"My greetifications upon thine 'oblest of heads, me fam",
		"Good meargana kwe tebye"
	    ]
	}
    ];

let test = contentModel;
test.schema = example_schema;

onDOMContentLoaded = ( () => { createBody(test); }) ()
