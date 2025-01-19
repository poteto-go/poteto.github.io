export const BEST_PRACTICE_LEAF = `
func main() {
  p := poteto.New()

  p.Leaf("/users", func(userApi poteto.Leaf) {
    userApi.Register(
      middleware.CamaraWithConfig(
        middleware.DefaultCamaraConfig,
      ),
    )

    uc := controllers.NewUserController()
    userApi.GET("/", uc.GetUsers)
    userApi.GET("/:name", uc.GetUserByName)
  })

  p.Run(":8080")
}
`;
