import { useNavigate } from "react-router-dom";

const Error404 = () => {
	const navigate = useNavigate();

	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-6">
					<div className="card mt-5">
						<div className="card-header">
							<h5>Error 404</h5>
						</div>
						<div className="card-body">
							<p>
								Page you are trying to access doesn't exist.
								Let's bring you back home!
							</p>
							<div>
								<button
									className="main-btn"
									onClick={() => navigate("/")}
								>
									Click Here
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Error404;
