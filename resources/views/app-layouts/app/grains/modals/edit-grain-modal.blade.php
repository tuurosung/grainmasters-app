<div class="modal fade" id="editGrainModal" tabindex="-1"
    role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalTitleId">
                    Update Grain Information
                </h5>
                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
            </div>
            <form method="POST" action="{{ route('update-grain', $grain) }}">
                @csrf
                @method('patch')

                <div class="modal-body">



                    <div class="mb-3">
                        <label for="name" class="form-label">Description</label>
                        <input type="text" class="form-control" name="name" id="name" placeholder="eg Maize" value="{{ $grain->name }}" />
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
                                        <option value="" selected>-- Select Color --</option>
                                        @foreach (\App\Helpers\GrainHelper::grainColors() as $key => $value)
                                            <option value="{{ $key }}" {{ $grain->color == $key ? 'selected' : '' }}>{{ $value }}</option>
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
                                        <option value="" selected>-- Select Size --</option>
                                        @foreach (\App\Helpers\GrainHelper::grainSizes() as $key => $value)
                                            <option value="{{ $key }}" {{ $grain->size == $key ? 'selected' : ''  }}>{{ $value }}</option>
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
                        <i class="fas fa-check me-3  "></i> Update Grain
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
