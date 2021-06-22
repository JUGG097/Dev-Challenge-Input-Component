import "./App.css";
import Input from "./components/Inputs/Input";

function App() {
	return (
		<>
			<div className="container mt-4">
				<div className="row">
					<h2>Inputs</h2>
				</div>

				<div className="row mt-4">
					<div className="col-12 mt-2">
						<div>
							<i>Default Input</i>
						</div>
						<Input />
					</div>
					<div className="col-12 mt-2">
						<div>
							<i>&lt;Input error /&gt;</i>
						</div>
						<Input error />
					</div>
					<div className="col-12 mt-2">
						<div>
							<i>&lt;Input disabled /&gt;</i>
						</div>
						<Input disabled />
					</div>
					<div className="col-12 col-sm-6 mt-2">
						<div>
							<i>
								&lt;Input helperText=&quot;Some interesting
								text&quot; /&gt;
							</i>
						</div>
						<Input
							helperText="Some interesting
								text"
						/>
					</div>
					<div className="col-12 col-sm-6 mt-2">
						<div>
							<i>
								&lt;Input helperText=&quot;Some interesting
								text&quot; error /&gt;
							</i>
						</div>
						<Input
							helperText="Some interesting
								text"
							error
						/>
					</div>

					<div className="col-12 col-sm-6 mt-2">
						<div>
							<i>&lt;Input startIcon /&gt;</i>
						</div>
						<Input startIcon />
					</div>

					<div className="col-12 col-sm-6 mt-2">
						<div>
							<i>&lt;Input endIcon /&gt;</i>
						</div>
						<Input endIcon />
					</div>

					<div className="col-12 mt-2">
						<div>
							<i>&lt;Input value=&quot;Text&quot; error /&gt;</i>
						</div>
						<Input value="Text" />
					</div>

					<div className="col-12 col-sm-6 mt-2">
						<div>
							<i>&lt;Input size=&quot;sm&quot; /&gt;</i>
						</div>
						<Input sie="sm" />
					</div>

					<div className="col-12 col-sm-6 mt-2">
						<div>
							<i>&lt;Input size=&quot;md&quot; /&gt;</i>
						</div>
						<Input size="md" />
					</div>

					<div className="col-12 mt-2">
						<div>
							<i>&lt;Input fullWidth /&gt;</i>
						</div>
						<Input fullWidth />
					</div>

					<div className="col-12 mt-2">
						<div>
							<i>&lt;Input multiline row=&quot;4&quot; /&gt;</i>
						</div>
						<Input multiline row="4" />
					</div>
				</div>
			</div>

			{/* Credit Footer */}
			<div
				className="row mt-4 p-4"
				style={{
					backgroundColor: "#1C313A",
					color: "white",
				}}
			>
				<div className="col-12 text-center">
					<p>Created By Adeoluwa Adeboye - devChallenge.io</p>
				</div>
			</div>
		</>
	);
}

export default App;
