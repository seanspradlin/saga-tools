<div class="bg-neutral text-neutral-content">
	<div class="container mx-auto">
		<div class="navbar">
			<h1 class="navbar-start">
				<a href="/" class="text-xl font-bold">SaGa Tools</a>
			</h1>
			<!-- {#if $isLoading}
				<div class="navbar-end">
					<span class="loading loading-dots"></span>
				</div>
			{:else if $user && $user.isAnonymous}
				<div class="navbar-end">
					<div class="dropdown dropdown-bottom dropdown-end">
						<button tabindex="0" class="btn btn-ghost md:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/></svg
							>
						</button>
						<ul class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
							<li>
								<a href="/login" class="btn btn-ghost">Login</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="navbar-end hidden md:flex">
					<a href="/login" class="btn btn-ghost">Login</a>
				</div>
			{:else}
				<div class="navbar-end">
					<button type="button" class="btn btn-ghost" onclick={logout}>Logout</button>
				</div>
			{/if} -->
		</div>
	</div>
</div>
