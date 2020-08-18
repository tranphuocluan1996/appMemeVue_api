<template>
  <header>
		<div class="ass1-header">
			<div class="container">
				<router-link to='/' class="ass1-logo">
					App Meme
				</router-link>
				<comp-navigation />
				<div class="ass1-header__search">
					<form action="#">
						<label>
							<input type="search" name="search-text" class="form-control" placeholder="Nhập từ khóa ...">
							<i class="icon-Search"></i>
						</label>
					</form>
				</div>
				<a href="#" class="ass1-header__btn-upload ass1-btn">
					<i class="icon-Upvote"></i> Upload
				</a>
				<a href="dang-nhap.html" class="ass1-header__btn-upload ass1-btn">
					Login
				</a>

			</div>
		</div>

	</header>
</template>

<script>
import CompNavigation from './CompNavigation'
export default {
	name:"comp-header",
	components:{
		CompNavigation
	}
}
</script>

<style>

</style>