# `grantPrivilegesToShare` Submodule <a name="`grantPrivilegesToShare` Submodule" id="@cdktn/provider-snowflake.grantPrivilegesToShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantPrivilegesToShare <a name="GrantPrivilegesToShare" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share snowflake_grant_privileges_to_share}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new GrantPrivilegesToShare(Construct Scope, string Id, GrantPrivilegesToShareConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig">GrantPrivilegesToShareConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig">GrantPrivilegesToShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnAllTablesInSchema">ResetOnAllTablesInSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnDatabase">ResetOnDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnFunction">ResetOnFunction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnSchema">ResetOnSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnTable">ResetOnTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnTag">ResetOnTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnView">ResetOnView</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.putTimeouts"></a>

```csharp
private void PutTimeouts(GrantPrivilegesToShareTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts">GrantPrivilegesToShareTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOnAllTablesInSchema` <a name="ResetOnAllTablesInSchema" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnAllTablesInSchema"></a>

```csharp
private void ResetOnAllTablesInSchema()
```

##### `ResetOnDatabase` <a name="ResetOnDatabase" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnDatabase"></a>

```csharp
private void ResetOnDatabase()
```

##### `ResetOnFunction` <a name="ResetOnFunction" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnFunction"></a>

```csharp
private void ResetOnFunction()
```

##### `ResetOnSchema` <a name="ResetOnSchema" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnSchema"></a>

```csharp
private void ResetOnSchema()
```

##### `ResetOnTable` <a name="ResetOnTable" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnTable"></a>

```csharp
private void ResetOnTable()
```

##### `ResetOnTag` <a name="ResetOnTag" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnTag"></a>

```csharp
private void ResetOnTag()
```

##### `ResetOnView` <a name="ResetOnView" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetOnView"></a>

```csharp
private void ResetOnView()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GrantPrivilegesToShare resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

GrantPrivilegesToShare.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

GrantPrivilegesToShare.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

GrantPrivilegesToShare.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

GrantPrivilegesToShare.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GrantPrivilegesToShare resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GrantPrivilegesToShare to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GrantPrivilegesToShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GrantPrivilegesToShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference">GrantPrivilegesToShareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onAllTablesInSchemaInput">OnAllTablesInSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onDatabaseInput">OnDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onFunctionInput">OnFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onSchemaInput">OnSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTableInput">OnTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTagInput">OnTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onViewInput">OnViewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.privilegesInput">PrivilegesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts">GrantPrivilegesToShareTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.toShareInput">ToShareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onAllTablesInSchema">OnAllTablesInSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onDatabase">OnDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onFunction">OnFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onSchema">OnSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTable">OnTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTag">OnTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onView">OnView</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.privileges">Privileges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.toShare">ToShare</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.timeouts"></a>

```csharp
public GrantPrivilegesToShareTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference">GrantPrivilegesToShareTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OnAllTablesInSchemaInput`<sup>Optional</sup> <a name="OnAllTablesInSchemaInput" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onAllTablesInSchemaInput"></a>

```csharp
public string OnAllTablesInSchemaInput { get; }
```

- *Type:* string

---

##### `OnDatabaseInput`<sup>Optional</sup> <a name="OnDatabaseInput" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onDatabaseInput"></a>

```csharp
public string OnDatabaseInput { get; }
```

- *Type:* string

---

##### `OnFunctionInput`<sup>Optional</sup> <a name="OnFunctionInput" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onFunctionInput"></a>

```csharp
public string OnFunctionInput { get; }
```

- *Type:* string

---

##### `OnSchemaInput`<sup>Optional</sup> <a name="OnSchemaInput" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onSchemaInput"></a>

```csharp
public string OnSchemaInput { get; }
```

- *Type:* string

---

##### `OnTableInput`<sup>Optional</sup> <a name="OnTableInput" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTableInput"></a>

```csharp
public string OnTableInput { get; }
```

- *Type:* string

---

##### `OnTagInput`<sup>Optional</sup> <a name="OnTagInput" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTagInput"></a>

```csharp
public string OnTagInput { get; }
```

- *Type:* string

---

##### `OnViewInput`<sup>Optional</sup> <a name="OnViewInput" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onViewInput"></a>

```csharp
public string OnViewInput { get; }
```

- *Type:* string

---

##### `PrivilegesInput`<sup>Optional</sup> <a name="PrivilegesInput" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.privilegesInput"></a>

```csharp
public string[] PrivilegesInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.timeoutsInput"></a>

```csharp
public IResolvable|GrantPrivilegesToShareTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts">GrantPrivilegesToShareTimeouts</a>

---

##### `ToShareInput`<sup>Optional</sup> <a name="ToShareInput" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.toShareInput"></a>

```csharp
public string ToShareInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OnAllTablesInSchema`<sup>Required</sup> <a name="OnAllTablesInSchema" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onAllTablesInSchema"></a>

```csharp
public string OnAllTablesInSchema { get; }
```

- *Type:* string

---

##### `OnDatabase`<sup>Required</sup> <a name="OnDatabase" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onDatabase"></a>

```csharp
public string OnDatabase { get; }
```

- *Type:* string

---

##### `OnFunction`<sup>Required</sup> <a name="OnFunction" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onFunction"></a>

```csharp
public string OnFunction { get; }
```

- *Type:* string

---

##### `OnSchema`<sup>Required</sup> <a name="OnSchema" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onSchema"></a>

```csharp
public string OnSchema { get; }
```

- *Type:* string

---

##### `OnTable`<sup>Required</sup> <a name="OnTable" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTable"></a>

```csharp
public string OnTable { get; }
```

- *Type:* string

---

##### `OnTag`<sup>Required</sup> <a name="OnTag" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onTag"></a>

```csharp
public string OnTag { get; }
```

- *Type:* string

---

##### `OnView`<sup>Required</sup> <a name="OnView" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.onView"></a>

```csharp
public string OnView { get; }
```

- *Type:* string

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.privileges"></a>

```csharp
public string[] Privileges { get; }
```

- *Type:* string[]

---

##### `ToShare`<sup>Required</sup> <a name="ToShare" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.toShare"></a>

```csharp
public string ToShare { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShare.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrantPrivilegesToShareConfig <a name="GrantPrivilegesToShareConfig" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new GrantPrivilegesToShareConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] Privileges,
    string ToShare,
    string Id = null,
    string OnAllTablesInSchema = null,
    string OnDatabase = null,
    string OnFunction = null,
    string OnSchema = null,
    string OnTable = null,
    string OnTag = null,
    string OnView = null,
    GrantPrivilegesToShareTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.privileges">Privileges</a></code> | <code>string[]</code> | The privileges to grant on the share. See available list of privileges: https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-share#syntax. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.toShare">ToShare</a></code> | <code>string</code> | The fully qualified name of the share on which privileges will be granted. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#id GrantPrivilegesToShare#id}. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onAllTablesInSchema">OnAllTablesInSchema</a></code> | <code>string</code> | The fully qualified identifier for the schema for which the specified privilege will be granted for all tables. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onDatabase">OnDatabase</a></code> | <code>string</code> | The fully qualified name of the database on which privileges will be granted. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onFunction">OnFunction</a></code> | <code>string</code> | The fully qualified name of the function on which privileges will be granted. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onSchema">OnSchema</a></code> | <code>string</code> | The fully qualified name of the schema on which privileges will be granted. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onTable">OnTable</a></code> | <code>string</code> | The fully qualified name of the table on which privileges will be granted. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onTag">OnTag</a></code> | <code>string</code> | The fully qualified name of the tag on which privileges will be granted. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onView">OnView</a></code> | <code>string</code> | The fully qualified name of the view on which privileges will be granted. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts">GrantPrivilegesToShareTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.privileges"></a>

```csharp
public string[] Privileges { get; set; }
```

- *Type:* string[]

The privileges to grant on the share. See available list of privileges: https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-share#syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#privileges GrantPrivilegesToShare#privileges}

---

##### `ToShare`<sup>Required</sup> <a name="ToShare" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.toShare"></a>

```csharp
public string ToShare { get; set; }
```

- *Type:* string

The fully qualified name of the share on which privileges will be granted.

For more information about this resource, see [docs](./share).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#to_share GrantPrivilegesToShare#to_share}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#id GrantPrivilegesToShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OnAllTablesInSchema`<sup>Optional</sup> <a name="OnAllTablesInSchema" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onAllTablesInSchema"></a>

```csharp
public string OnAllTablesInSchema { get; set; }
```

- *Type:* string

The fully qualified identifier for the schema for which the specified privilege will be granted for all tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#on_all_tables_in_schema GrantPrivilegesToShare#on_all_tables_in_schema}

---

##### `OnDatabase`<sup>Optional</sup> <a name="OnDatabase" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onDatabase"></a>

```csharp
public string OnDatabase { get; set; }
```

- *Type:* string

The fully qualified name of the database on which privileges will be granted.

For more information about this resource, see [docs](./database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#on_database GrantPrivilegesToShare#on_database}

---

##### `OnFunction`<sup>Optional</sup> <a name="OnFunction" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onFunction"></a>

```csharp
public string OnFunction { get; set; }
```

- *Type:* string

The fully qualified name of the function on which privileges will be granted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#on_function GrantPrivilegesToShare#on_function}

---

##### `OnSchema`<sup>Optional</sup> <a name="OnSchema" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onSchema"></a>

```csharp
public string OnSchema { get; set; }
```

- *Type:* string

The fully qualified name of the schema on which privileges will be granted.

For more information about this resource, see [docs](./schema).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#on_schema GrantPrivilegesToShare#on_schema}

---

##### `OnTable`<sup>Optional</sup> <a name="OnTable" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onTable"></a>

```csharp
public string OnTable { get; set; }
```

- *Type:* string

The fully qualified name of the table on which privileges will be granted.

For more information about this resource, see [docs](./table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#on_table GrantPrivilegesToShare#on_table}

---

##### `OnTag`<sup>Optional</sup> <a name="OnTag" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onTag"></a>

```csharp
public string OnTag { get; set; }
```

- *Type:* string

The fully qualified name of the tag on which privileges will be granted.

For more information about this resource, see [docs](./tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#on_tag GrantPrivilegesToShare#on_tag}

---

##### `OnView`<sup>Optional</sup> <a name="OnView" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.onView"></a>

```csharp
public string OnView { get; set; }
```

- *Type:* string

The fully qualified name of the view on which privileges will be granted.

For more information about this resource, see [docs](./view).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#on_view GrantPrivilegesToShare#on_view}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareConfig.property.timeouts"></a>

```csharp
public GrantPrivilegesToShareTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts">GrantPrivilegesToShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#timeouts GrantPrivilegesToShare#timeouts}

---

### GrantPrivilegesToShareTimeouts <a name="GrantPrivilegesToShareTimeouts" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new GrantPrivilegesToShareTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#create GrantPrivilegesToShare#create}. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#delete GrantPrivilegesToShare#delete}. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#read GrantPrivilegesToShare#read}. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#update GrantPrivilegesToShare#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#create GrantPrivilegesToShare#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#delete GrantPrivilegesToShare#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#read GrantPrivilegesToShare#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/grant_privileges_to_share#update GrantPrivilegesToShare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrantPrivilegesToShareTimeoutsOutputReference <a name="GrantPrivilegesToShareTimeoutsOutputReference" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new GrantPrivilegesToShareTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts">GrantPrivilegesToShareTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GrantPrivilegesToShareTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.grantPrivilegesToShare.GrantPrivilegesToShareTimeouts">GrantPrivilegesToShareTimeouts</a>

---



