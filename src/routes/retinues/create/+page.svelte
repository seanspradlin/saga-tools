<form class="flex max-w-sm flex-col gap-4" method="POST">
	<label class="form-control w-full">
		<div class="label">
			<span class="label-text">Name</span>
		</div>
		<input
			name="name"
			type="text"
			placeholder="Firebringer Beaters"
			class="input input-bordered w-full"
			required
		/>
	</label>
	<label class="form-control w-full">
		<div class="label">
			<span class="label-text">Protagonist</span>
		</div>
		<select name="protagonist" class="select select-bordered" required>
			<option disabled selected>Pick one</option>
			<option value="balmaint">Balmaint</option>
			<option value="leonard">Leonard</option>
			<option value="taria">Taria</option>
			<option value="urpina">Urpina</option>
		</select>
	</label>
	<div class="my-4 flex flex-row gap-2 justify-end">
		<button type="button" class="btn btn-outline">Cancel</button>
		<button type="submit" class="btn btn-primary">Create</button>
	</div>
</form>
