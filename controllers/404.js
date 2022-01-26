exports.Error = (req,res) => {
	req.status(404).render({
		"404"
	})
}