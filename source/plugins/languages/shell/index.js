let studio = null;


//TODO create settings function to save in folder.

export default function setup (options, imports, register)
{
	studio = imports;
	/**
	{
		id: 'javascript',
		title: 'JavaScript',
		icon:'./data/img/languages/project/javascript.png',
		options:{
			main(){

			}
		}
	}, */
	let pictograms = [
		{
			extension: '.sh',
			icon:'mdi-bash'
		},
		{
			extension: '.json',
			icon:'mdi-json'
		},
		{
			extension: '.md',
			icon:'mdi-markdown'
		},
	];
	let shell = {
		async createProject(name){
			await studio.projects.newFile(name,'/main.sh','echo "Hello from Shell"');
		},
		getDefaultFileName() {
			return '/main.sh';
		},
		getDefaultRunFileName() {
			return '/main.sh';
		},
		getMakefile(project, filename) {
			if (filename[0] === '/') filename = filename.substring (1);
			// TODO add filename
			return 'run:\n\tbash main.sh';
		},
	};

	studio.projects.registerLanguage('shell', 'Bash Shell', 'plugins/languages/shell/data/img/shellLittle.png',pictograms, shell);

	register (null, {});
}
