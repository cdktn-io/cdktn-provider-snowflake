# `storageLifecyclePolicy` Submodule <a name="`storageLifecyclePolicy` Submodule" id="@cdktn/provider-snowflake.storageLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageLifecyclePolicy <a name="StorageLifecyclePolicy" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy snowflake_storage_lifecycle_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageLifecyclePolicy(Construct Scope, string Id, StorageLifecyclePolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig">StorageLifecyclePolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig">StorageLifecyclePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putArgument">PutArgument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetArchiveForDays">ResetArchiveForDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetArchiveTier">ResetArchiveTier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArgument` <a name="PutArgument" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putArgument"></a>

```csharp
private void PutArgument(IResolvable|StorageLifecyclePolicyArgument[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putArgument.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageLifecyclePolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a>

---

##### `ResetArchiveForDays` <a name="ResetArchiveForDays" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetArchiveForDays"></a>

```csharp
private void ResetArchiveForDays()
```

##### `ResetArchiveTier` <a name="ResetArchiveTier" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetArchiveTier"></a>

```csharp
private void ResetArchiveTier()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StorageLifecyclePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

StorageLifecyclePolicy.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

StorageLifecyclePolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

StorageLifecyclePolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

StorageLifecyclePolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a StorageLifecyclePolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageLifecyclePolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageLifecyclePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the StorageLifecyclePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.argument">Argument</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList">StorageLifecyclePolicyArgumentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList">StorageLifecyclePolicyDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList">StorageLifecyclePolicyShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference">StorageLifecyclePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveForDaysInput">ArchiveForDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveTierInput">ArchiveTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.argumentInput">ArgumentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveForDays">ArchiveForDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveTier">ArchiveTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.schema">Schema</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Argument`<sup>Required</sup> <a name="Argument" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.argument"></a>

```csharp
public StorageLifecyclePolicyArgumentList Argument { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList">StorageLifecyclePolicyArgumentList</a>

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.describeOutput"></a>

```csharp
public StorageLifecyclePolicyDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList">StorageLifecyclePolicyDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.showOutput"></a>

```csharp
public StorageLifecyclePolicyShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList">StorageLifecyclePolicyShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.timeouts"></a>

```csharp
public StorageLifecyclePolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference">StorageLifecyclePolicyTimeoutsOutputReference</a>

---

##### `ArchiveForDaysInput`<sup>Optional</sup> <a name="ArchiveForDaysInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveForDaysInput"></a>

```csharp
public double ArchiveForDaysInput { get; }
```

- *Type:* double

---

##### `ArchiveTierInput`<sup>Optional</sup> <a name="ArchiveTierInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveTierInput"></a>

```csharp
public string ArchiveTierInput { get; }
```

- *Type:* string

---

##### `ArgumentInput`<sup>Optional</sup> <a name="ArgumentInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.argumentInput"></a>

```csharp
public IResolvable|StorageLifecyclePolicyArgument[] ArgumentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>[]

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|StorageLifecyclePolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a>

---

##### `ArchiveForDays`<sup>Required</sup> <a name="ArchiveForDays" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveForDays"></a>

```csharp
public double ArchiveForDays { get; }
```

- *Type:* double

---

##### `ArchiveTier`<sup>Required</sup> <a name="ArchiveTier" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.archiveTier"></a>

```csharp
public string ArchiveTier { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageLifecyclePolicyArgument <a name="StorageLifecyclePolicyArgument" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageLifecyclePolicyArgument {
    string Name,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument.property.name">Name</a></code> | <code>string</code> | The argument name. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument.property.type">Type</a></code> | <code>string</code> | The argument type. For more information about data types, check [Snowflake docs](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types). |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The argument name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#name StorageLifecyclePolicy#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The argument type. For more information about data types, check [Snowflake docs](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#type StorageLifecyclePolicy#type}

---

### StorageLifecyclePolicyConfig <a name="StorageLifecyclePolicyConfig" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageLifecyclePolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|StorageLifecyclePolicyArgument[] Argument,
    string Body,
    string Database,
    string Name,
    string Schema,
    double ArchiveForDays = null,
    string ArchiveTier = null,
    string Comment = null,
    string Id = null,
    StorageLifecyclePolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.argument">Argument</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>[]</code> | argument block. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.body">Body</a></code> | <code>string</code> | Specifies the SQL expression. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.database">Database</a></code> | <code>string</code> | The database in which to create the storage lifecycle policy. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the storage lifecycle policy; |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.schema">Schema</a></code> | <code>string</code> | The schema in which to create the storage lifecycle policy. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.archiveForDays">ArchiveForDays</a></code> | <code>double</code> | Specifies the number of days to keep rows that match the policy expression in archive storage. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.archiveTier">ArchiveTier</a></code> | <code>string</code> | Specifies the type of storage tier to use for archiving rows. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the storage lifecycle policy. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#id StorageLifecyclePolicy#id}. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Argument`<sup>Required</sup> <a name="Argument" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.argument"></a>

```csharp
public IResolvable|StorageLifecyclePolicyArgument[] Argument { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>[]

argument block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#argument StorageLifecyclePolicy#argument}

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

Specifies the SQL expression.

The expression can be any boolean-valued SQL expression. To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#body StorageLifecyclePolicy#body}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database in which to create the storage lifecycle policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#database StorageLifecyclePolicy#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the storage lifecycle policy;

must be unique for the database and schema in which the storage lifecycle policy is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#name StorageLifecyclePolicy#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema in which to create the storage lifecycle policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#schema StorageLifecyclePolicy#schema}

---

##### `ArchiveForDays`<sup>Optional</sup> <a name="ArchiveForDays" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.archiveForDays"></a>

```csharp
public double ArchiveForDays { get; set; }
```

- *Type:* double

Specifies the number of days to keep rows that match the policy expression in archive storage.

If set, Snowflake moves the data into archive storage according to the value you select for archive_tier. If unset, Snowflake expires the rows from the table without archiving the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#archive_for_days StorageLifecyclePolicy#archive_for_days}

---

##### `ArchiveTier`<sup>Optional</sup> <a name="ArchiveTier" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.archiveTier"></a>

```csharp
public string ArchiveTier { get; set; }
```

- *Type:* string

Specifies the type of storage tier to use for archiving rows.

After you set the ARCHIVE_TIER for a policy, you can’t modify it. If you don’t specify this parameter, the policy is an expiration policy that deletes rows without archiving them. Valid values are (case-insensitive): `COOL` | `COLD`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#archive_tier StorageLifecyclePolicy#archive_tier}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the storage lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#comment StorageLifecyclePolicy#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#id StorageLifecyclePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyConfig.property.timeouts"></a>

```csharp
public StorageLifecyclePolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#timeouts StorageLifecyclePolicy#timeouts}

---

### StorageLifecyclePolicyDescribeOutput <a name="StorageLifecyclePolicyDescribeOutput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageLifecyclePolicyDescribeOutput {

};
```


### StorageLifecyclePolicyDescribeOutputSignature <a name="StorageLifecyclePolicyDescribeOutputSignature" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignature"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignature.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageLifecyclePolicyDescribeOutputSignature {

};
```


### StorageLifecyclePolicyShowOutput <a name="StorageLifecyclePolicyShowOutput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageLifecyclePolicyShowOutput {

};
```


### StorageLifecyclePolicyTimeouts <a name="StorageLifecyclePolicyTimeouts" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageLifecyclePolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#create StorageLifecyclePolicy#create}. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#delete StorageLifecyclePolicy#delete}. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#read StorageLifecyclePolicy#read}. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#update StorageLifecyclePolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#create StorageLifecyclePolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#delete StorageLifecyclePolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#read StorageLifecyclePolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/storage_lifecycle_policy#update StorageLifecyclePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageLifecyclePolicyArgumentList <a name="StorageLifecyclePolicyArgumentList" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageLifecyclePolicyArgumentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.get"></a>

```csharp
private StorageLifecyclePolicyArgumentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentList.property.internalValue"></a>

```csharp
public IResolvable|StorageLifecyclePolicyArgument[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>[]

---


### StorageLifecyclePolicyArgumentOutputReference <a name="StorageLifecyclePolicyArgumentOutputReference" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageLifecyclePolicyArgumentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgumentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StorageLifecyclePolicyArgument InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyArgument">StorageLifecyclePolicyArgument</a>

---


### StorageLifecyclePolicyDescribeOutputList <a name="StorageLifecyclePolicyDescribeOutputList" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageLifecyclePolicyDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.get"></a>

```csharp
private StorageLifecyclePolicyDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageLifecyclePolicyDescribeOutputOutputReference <a name="StorageLifecyclePolicyDescribeOutputOutputReference" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageLifecyclePolicyDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.archiveForDays">ArchiveForDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.archiveTier">ArchiveTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.returnType">ReturnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.signature">Signature</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList">StorageLifecyclePolicyDescribeOutputSignatureList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutput">StorageLifecyclePolicyDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchiveForDays`<sup>Required</sup> <a name="ArchiveForDays" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.archiveForDays"></a>

```csharp
public double ArchiveForDays { get; }
```

- *Type:* double

---

##### `ArchiveTier`<sup>Required</sup> <a name="ArchiveTier" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.archiveTier"></a>

```csharp
public string ArchiveTier { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReturnType`<sup>Required</sup> <a name="ReturnType" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.returnType"></a>

```csharp
public string ReturnType { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.signature"></a>

```csharp
public StorageLifecyclePolicyDescribeOutputSignatureList Signature { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList">StorageLifecyclePolicyDescribeOutputSignatureList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public StorageLifecyclePolicyDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutput">StorageLifecyclePolicyDescribeOutput</a>

---


### StorageLifecyclePolicyDescribeOutputSignatureList <a name="StorageLifecyclePolicyDescribeOutputSignatureList" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageLifecyclePolicyDescribeOutputSignatureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.get"></a>

```csharp
private StorageLifecyclePolicyDescribeOutputSignatureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageLifecyclePolicyDescribeOutputSignatureOutputReference <a name="StorageLifecyclePolicyDescribeOutputSignatureOutputReference" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageLifecyclePolicyDescribeOutputSignatureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignature">StorageLifecyclePolicyDescribeOutputSignature</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignatureOutputReference.property.internalValue"></a>

```csharp
public StorageLifecyclePolicyDescribeOutputSignature InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyDescribeOutputSignature">StorageLifecyclePolicyDescribeOutputSignature</a>

---


### StorageLifecyclePolicyShowOutputList <a name="StorageLifecyclePolicyShowOutputList" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageLifecyclePolicyShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.get"></a>

```csharp
private StorageLifecyclePolicyShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### StorageLifecyclePolicyShowOutputOutputReference <a name="StorageLifecyclePolicyShowOutputOutputReference" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageLifecyclePolicyShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.options">Options</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutput">StorageLifecyclePolicyShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.options"></a>

```csharp
public string Options { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutputOutputReference.property.internalValue"></a>

```csharp
public StorageLifecyclePolicyShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyShowOutput">StorageLifecyclePolicyShowOutput</a>

---


### StorageLifecyclePolicyTimeoutsOutputReference <a name="StorageLifecyclePolicyTimeoutsOutputReference" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new StorageLifecyclePolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StorageLifecyclePolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.storageLifecyclePolicy.StorageLifecyclePolicyTimeouts">StorageLifecyclePolicyTimeouts</a>

---



