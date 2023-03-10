<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		Chevron,
		Avatar
	} from 'flowbite-svelte';
</script>

<div class="sticky top-0 z-50 drop-shadow-md">
	<Navbar let:hidden let:toggle>
		<NavBrand href="/">
			<img src="/favicon.png" class="mr-3 h-6 sm:h-9" alt="CalcEstate Logo" />
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				CalcEstate
			</span>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden}>
			<NavLi href="/" active={true}>Home</NavLi>
			<NavLi id="nav-menu1" class="cursor-pointer"><Chevron aligned>Calculators</Chevron></NavLi>
			<NavLi href="/contact">Contact</NavLi>
			<Dropdown triggeredBy="#nav-menu1" class="w-60 z-20">
				<a href="/calculator/rental-property">
					<DropdownItem>Rental Property</DropdownItem>
				</a>
				<DropdownItem
					>BRRRR Property <span class="text-xs font-mono text-amber-500">Coming Soon</span
					></DropdownItem
				>
				<DropdownItem
					>Flipping <span class="text-xs font-mono text-amber-500">Coming Soon</span></DropdownItem
				>
			</Dropdown>
		</NavUl>
	</Navbar>
</div>
