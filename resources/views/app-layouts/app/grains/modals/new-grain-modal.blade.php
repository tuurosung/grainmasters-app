<div class="modal fade" id="newGrainModal" tabindex="-1"
    role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalTitleId">
                    Add New Grain
                </h5>
                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
            </div>
            <form method="POST" action="{{ route('store-grain') }}">
                @csrf

                <div class="modal-body">



                    <div class="mb-3">
                        <label for="name" class="form-label">Description</label>
                        <input type="text" class="form-control" name="name" id="name" placeholder="eg Maize" />
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <div class="mb-3">
                                    <label for="color" class="form-label">Color</label>
                                    <select
                                        class="form-select"
                                        name="color"
                                        id="color"
                                    >
                                        <option selected>-- Select Color --</option>
                                        @foreach (\App\Helpers\GrainHelper::grainColors() as $key => $value)
                                            <option value="{{ $key }}">{{ $value }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <div class="mb-3">
                                    <label for="size" class="form-label">Size</label>
                                    <select
                                        class="form-select"
                                        name="size"
                                        id="size"
                                    >
                                        <option selected>-- Select Size --</option>
                                        @foreach (\App\Helpers\GrainHelper::grainSizes() as $key => $value)
                                            <option value="{{ $key }}">{{ $value }}</option>
                                        @endforeach
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        Close
                    </button>
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-check me-3  "></i> Save
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
